import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { BarnbridgeSmartAlphaAppDefinition } from './barnbridge-smart-alpha.definition';
import { BarnbridgeSmartAlphaContractFactory } from './contracts';
import { EthereumBarnbridgeSmartAlphaJuniorTokenFetcher } from './ethereum/barnbridge-smart-alpha.junior-pool.token-fetcher';
import { EthereumBarnbridgeSmartAlphaSeniorTokenFetcher } from './ethereum/barnbridge-smart-alpha.senior-pool.token-fetcher';

@Module({
  providers: [
    BarnbridgeSmartAlphaAppDefinition,
    BarnbridgeSmartAlphaContractFactory,
    EthereumBarnbridgeSmartAlphaJuniorTokenFetcher,
    EthereumBarnbridgeSmartAlphaSeniorTokenFetcher,
  ],
})
export class BarnbridgeSmartAlphaAppModule extends AbstractApp() {}
