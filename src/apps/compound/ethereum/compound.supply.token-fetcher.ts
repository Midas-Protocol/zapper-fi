import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import {
  GetUnderlyingTokensParams,
  DefaultAppTokenDataProps,
  GetPricePerShareParams,
  GetDataPropsParams,
} from '~position/template/app-token.template.types';

import { CompoundSupplyTokenFetcher, GetMarketsParams } from '../common/compound.supply.token-fetcher';
import { CompoundComptroller, CompoundContractFactory, CompoundCToken } from '../contracts';

@PositionTemplate()
export class EthereumCompoundSupplyTokenFetcher extends CompoundSupplyTokenFetcher<
  CompoundCToken,
  CompoundComptroller
> {
  groupLabel = 'Lending';
  comptrollerAddress = '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(CompoundContractFactory) protected readonly contractFactory: CompoundContractFactory,
  ) {
    super(appToolkit);
  }

  getCompoundCTokenContract(address: string) {
    return this.contractFactory.compoundCToken({ address, network: this.network });
  }

  getCompoundComptrollerContract(address: string) {
    return this.contractFactory.compoundComptroller({ address, network: this.network });
  }

  async getMarkets({ contract }: GetMarketsParams<CompoundComptroller>) {
    return contract.getAllMarkets();
  }

  async getUnderlyingAddress({ contract }: GetUnderlyingTokensParams<CompoundCToken>) {
    return contract.underlying();
  }

  async getExchangeRate({ contract }: GetPricePerShareParams<CompoundCToken, DefaultAppTokenDataProps>) {
    return contract.exchangeRateCurrent();
  }

  async getSupplyRate({ contract }: GetDataPropsParams<CompoundCToken, DefaultAppTokenDataProps>) {
    return contract.supplyRatePerBlock().catch(() => 0);
  }
}
