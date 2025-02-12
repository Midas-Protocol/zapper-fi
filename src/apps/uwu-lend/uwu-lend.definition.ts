import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const UWU_LEND_DEFINITION = appDefinition({
  id: 'uwu-lend',
  name: 'UwU Lend',
  description: `UwU Lend is a liquidity market that offers depositing and borrowing.`,
  groups: {
    supply: {
      id: 'supply',
      type: GroupType.TOKEN,
      label: 'Lending',
    },

    variableDebt: {
      id: 'variable-debt',
      type: GroupType.TOKEN,
      label: 'Lending',
    },

    platformFeesV1: {
      id: 'platform-fees-v1',
      type: GroupType.POSITION,
      label: 'Platform Fees V1',
    },

    platformFeesV2: {
      id: 'platform-fees-v2',
      type: GroupType.POSITION,
      label: 'Platform Fees V2',
    },
  },
  url: 'https://app.uwulend.fi/',
  links: {
    twitter: 'https://twitter.com/uwu_lend',
    discord: 'https://discord.com/invite/sBCmVSeW9W',
  },
  tags: [AppTag.LENDING],
  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
  },
});

@Register.AppDefinition(UWU_LEND_DEFINITION.id)
export class UwuLendAppDefinition extends AppDefinition {
  constructor() {
    super(UWU_LEND_DEFINITION);
  }
}

export default UWU_LEND_DEFINITION;
