import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const MIDAS_DEFINITION = appDefinition({
  id: 'midas',
  name: 'Midas Capital',
  description:
    'Midas Capital is a cross-chain money market solution that unlocks and maximizes the usage of all digital assets and makes them work for you.',
  url: 'https://app.midascapital.xyz/',
  groups: {
    pool: {
      id: 'market',
      type: GroupType.TOKEN,
      label: 'Markets',
    },
  },
  tags: [AppTag.LIQUIDITY_POOL],
  keywords: [],
  links: {
    github: 'https://github.com/Midas-Protocol/monorepo',
    twitter: 'https://twitter.com/MidasCapitalxyz',
    discord: 'https://discord.gg/85YxVuPeMt',
    telegram: 'https://t.me/midascapitaltg',
  },

  supportedNetworks: {
    [Network.POLYGON_MAINNET]: [AppAction.VIEW],
    [Network.BINANCE_SMART_CHAIN_MAINNET]: [AppAction.VIEW],
    [Network.EVMOS_MAINNET]: [AppAction.VIEW],
  },

  primaryColor: '#fff',
});

@Register.AppDefinition(MIDAS_DEFINITION.id)
export class MidasAppDefinition extends AppDefinition {
  constructor() {
    super(MIDAS_DEFINITION);
  }
}
