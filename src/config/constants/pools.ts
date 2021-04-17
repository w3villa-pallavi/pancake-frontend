import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd95e01fd9a860a33c5c4d60e220c8e8cfbdc0e34',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 98,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.itam,
  //   contractAddress: {
  //     97: '',
  //     56: '0x44eC1B26035865D9A7C130fD872670CD7Ebac2bC',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '3.096',
  // },
  // {
  //   sousId: 97,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bondly,
  //   contractAddress: {
  //     97: '',
  //     56: '0x1329ad151dE6C441184E32E108401126AE850937',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.4629',
  // },
  // {
  //   sousId: 96,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.tko,
  //   contractAddress: {
  //     97: '',
  //     56: '0x9bbDc92474a7e7321B78dcDA5EF35f4981438760',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '1.1574',
  // },
  // {
  //   sousId: 95,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.apys,
  //   contractAddress: {
  //     97: '',
  //     56: '0x46530d79b238f809e80313e73715b160c66677aF',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.09953',
  // },
  // {
  //   sousId: 94,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.hoo,
  //   contractAddress: {
  //     97: '',
  //     56: '0x47fD853D5baD391899172892F91FAa6d0cd8A2Aa',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.489',
  // },
  // {
  //   sousId: 93,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.oddz,
  //   contractAddress: {
  //     97: '',
  //     56: '0xe25aB6F05BBF6C1be953BF2d7df15B3e01b8e5a5',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.11284',
  // },
  // {
  //   sousId: 92,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.easy,
  //   contractAddress: {
  //     97: '',
  //     56: '0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.0072338',
  // },
  // {
  //   sousId: 91,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.nrv,
  //   contractAddress: {
  //     97: '',
  //     56: '0xABFd8d1942628124aB971937154f826Bce86DcbC',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.15046',
  // },
  // {
  //   sousId: 90,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.dego,
  //   contractAddress: {
  //     97: '',
  //     56: '0x526d3c204255f807C95a99b69596f2f9f72345e5',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.00405',
  // },
  // {
  //   sousId: 89,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.gum,
  //   contractAddress: {
  //     97: '',
  //     56: '0xAa2082BeE04fc518300ec673F9497ffa6F669dB8',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.08912',
  // },
  // {
  //   sousId: 88,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.pbtc,
  //   contractAddress: {
  //     97: '',
  //     56: '0x9096625Bc0d36F5EDa6d44e511641667d89C28f4',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.0000031',
  // },
  // {
  //   sousId: 87,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.dft,
  //   contractAddress: {
  //     97: '',
  //     56: '0x78BD4dB48F8983c3C36C8EAFbEF38f6aC7B55285',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.6811',
  // },
  // {
  //   sousId: 86,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.swth,
  //   contractAddress: {
  //     97: '',
  //     56: '0x35418e14F5aA615C4f020eFBa6e01C5DbF15AdD2',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '2.3148',
  // },
  // {
  //   sousId: 85,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.lien,
  //   contractAddress: {
  //     97: '',
  //     56: '0x3c7cC49a35942fbD3C2ad428a6c22490cd709d03',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.003472',
  // },
  // {
  //   sousId: 84,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.zil,
  //   contractAddress: {
  //     97: '',
  //     56: '0xF795739737ABcFE0273f4Dced076460fdD024Dd9',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '1.0995',
  // },
  // {
  //   sousId: 83,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.pcws,
  //   contractAddress: {
  //     97: '',
  //     56: '0x06FF8960F7F4aE572A3f57FAe77B2882BE94Bf90',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.00434',
  // },
  // {
  //   sousId: 82,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bbadger,
  //   contractAddress: {
  //     97: '',
  //     56: '0xe4dD0C50fb314A8B2e84D211546F5B57eDd7c2b9',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.00265278',
  // },
  // {
  //   sousId: 81,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bdigg,
  //   contractAddress: {
  //     97: '',
  //     56: '0xb627A7e33Db571bE792B0b69c5C2f5a8160d5500',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.00000403',
  // },
  // {
  //   sousId: 80,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.lto,
  //   contractAddress: {
  //     97: '',
  //     56: '0xadBfFA25594AF8Bc421ecaDF54D057236a99781e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.2893',
  // },
  // {
  //   sousId: 79,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.mir,
  //   contractAddress: {
  //     97: '',
  //     56: '0x3e31488f08EBcE6F2D8a2AA512aeFa49a3C7dFa7',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01273',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 78,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.mir,
  //   contractAddress: {
  //     97: '',
  //     56: '0x453a75908fb5a36d482d5f8fe88eca836f32ead5',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01273',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 77,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.trade,
  //   contractAddress: {
  //     97: '',
  //     56: '0x509C99D73FB54b2c20689708b3F824147292D38e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.4484',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 76,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.dusk,
  //   contractAddress: {
  //     97: '',
  //     56: '0xF1bd5673Ea4a1C415ec84fa3E402F2F7788E7717',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.4629',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 75,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bifi,
  //   contractAddress: {
  //     97: '',
  //     56: '0xB4C68A1C565298834360BbFF1652284275120D47',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.00007234',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 74,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.txl,
  //   contractAddress: {
  //     97: '',
  //     56: '0x153e62257F1AAe05d5d253a670Ca7585c8D3F94F',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.434027',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 73,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.cos,
  //   contractAddress: {
  //     97: '',
  //     56: '0xF682D186168b4114ffDbF1291F19429310727151',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '5.787',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 72,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bunny,
  //   contractAddress: {
  //     97: '',
  //     56: '0xaDdAE5f4dB84847ac9d947AED1304A8e7D19f7cA',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.00289',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 71,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.alice,
  //   contractAddress: {
  //     97: '',
  //     56: '0x4C32048628D0d32d4D6c52662FB4A92747782B56',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.14467',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 70,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.for,
  //   contractAddress: {
  //     97: '',
  //     56: '0x47642101e8D8578C42765d7AbcFd0bA31868c523',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '2.8935',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 69,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bux,
  //   contractAddress: {
  //     97: '',
  //     56: '0x07F8217c68ed9b838b0b8B58C19c79bACE746e9A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.5787',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 68,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.nuls,
  //   contractAddress: {
  //     97: '',
  //     56: '0x580DC9bB9260A922E3A4355b9119dB990F09410d',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0868',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 67,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.belt,
  //   contractAddress: {
  //     97: '',
  //     56: '0x6f0037d158eD1AeE395e1c12d21aE8583842F472',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.00868',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 66,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.ramp,
  //   contractAddress: {
  //     97: '',
  //     56: '0x423382f989C6C289c8D441000e1045e231bd7d90',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.4861',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 65,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bfi,
  //   contractAddress: {
  //     97: '',
  //     56: '0x0A595623b58dFDe6eB468b613C11A7A8E84F09b9',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0001157',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 64,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.dexe,
  //   contractAddress: {
  //     97: '',
  //     56: '0x9E6dA246d369a41DC44673ce658966cAf487f7b2',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.009837',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 63,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bel,
  //   contractAddress: {
  //     97: '',
  //     56: '0x2C0f449387b15793B9da27c2d945dBed83ab1B07',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0549',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 62,
  //   stakingToken: tokens.tpt,
  //   earningToken: tokens.cake,
  //   stakingLimit: 25000,
  //   contractAddress: {
  //     97: '',
  //     56: '0x0c3D6892aa3b23811Af3bd1bbeA8b0740E8e4528',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0462',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 61,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.tpt,
  //   contractAddress: {
  //     97: '',
  //     56: '0x75C91844c5383A68b7d3A427A44C32E3ba66Fe45',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '3.616',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 60,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.watch,
  //   contractAddress: {
  //     97: '',
  //     56: '0xC58954199E268505fa3D3Cb0A00b7207af8C2D1d',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.3472',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 59,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.xmark,
  //   contractAddress: {
  //     97: '',
  //     56: '0xA5137e08C48167E363Be8Ec42A68f4F54330964E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0413',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 58,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bmxx,
  //   contractAddress: {
  //     97: '',
  //     56: '0x6F31B87f51654424Ce57E9F8243E27ed13846CDB',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.00248',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 57,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.iotx,
  //   contractAddress: {
  //     97: '',
  //     56: '0xCE54BA909d23B9d4BE0Ff0d84e5aE83F0ADD8D9a',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '6.365',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 56,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bor,
  //   contractAddress: {
  //     97: '',
  //     56: '0x3e677dC00668d69c2A7724b9AFA7363e8A56994e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.000395',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 55,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bopen,
  //   contractAddress: {
  //     97: '',
  //     56: '0x5Ac8406498dC1921735d559CeC271bEd23B294A7',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0723',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 54,
  //   stakingToken: tokens.sushi,
  //   earningToken: tokens.cake,
  //   stakingLimit: 50,
  //   contractAddress: {
  //     97: '',
  //     56: '0xb69b6e390cba1F68442A886bC89E955048DAe7E3',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0367',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 53,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.dodo,
  //   contractAddress: {
  //     97: '',
  //     56: '0xae3001ddb18A6A57BEC2C19D71680437CA87bA1D',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0578',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 52,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.swingby,
  //   contractAddress: {
  //     97: '',
  //     56: '0x02aa767e855b8e80506fb47176202aA58A95315a',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.13',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 51,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bry,
  //   contractAddress: {
  //     97: '',
  //     56: '0x1c736F4FB20C7742Ee83a4099fE92abA61dFca41',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.1157',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 50,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.zee,
  //   contractAddress: {
  //     97: '',
  //     56: '0x02861B607a5E87daf3FD6ec19DFB715F1b371379',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.1736',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 49,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.swgb,
  //   contractAddress: {
  //     97: '',
  //     56: '0x73e4E8d010289267dEe3d1Fc48974B60363963CE',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.899',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 48,
  //   stakingToken: tokens.comp,
  //   earningToken: tokens.cake,
  //   stakingLimit: 1,
  //   contractAddress: {
  //     97: '',
  //     56: '0xE0565fBb109A3f3f8097D8A9D931277bfd795072',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.055',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 47,
  //   stakingToken: tokens.comp,
  //   earningToken: tokens.cake,
  //   stakingLimit: 1,
  //   contractAddress: {
  //     97: '',
  //     56: '0xc3693e3cbc3514d5d07EA5b27A721F184F617900',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.55',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 46,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.sfp,
  //   contractAddress: {
  //     97: '',
  //     56: '0x2B02d43967765b18E31a9621da640588f3550EFD',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.6',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 45,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.lina,
  //   contractAddress: {
  //     97: '',
  //     56: '0x212bb602418C399c29D52C55100fD6bBa12bea05',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.983',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 44,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.lina,
  //   contractAddress: {
  //     97: '',
  //     56: '0x04aE8ca68A116278026fB721c06dCe709eD7013C',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0983',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 43,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.lit,
  //   contractAddress: {
  //     97: '',
  //     56: '0x1714bAAE9DD4738CDEA07756427FA8d4F08D9479',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.231',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 42,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.hget,
  //   contractAddress: {
  //     97: '',
  //     56: '0xcCD0b93cC6ce3dC6dFaA9DB68f70e5C8455aC5bd',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0138',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 41,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bdo,
  //   contractAddress: {
  //     97: '',
  //     56: '0x9cB24e9460351bC51d4066BC6AEd1F3809b02B78',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.075',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 40,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.egld,
  //   contractAddress: {
  //     97: '',
  //     56: '0x2dcf4cDFf4Dd954683Fe0a6123077f8a025b66cF',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.001215',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 39,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.ust,
  //   contractAddress: {
  //     97: '',
  //     56: '0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.1157',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 38,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.wsote,
  //   contractAddress: {
  //     97: '',
  //     56: '0xD0b738eC507571176D40f28bd56a0120E375f73a',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.23',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 37,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.front,
  //   contractAddress: {
  //     97: '',
  //     56: '0xf7a31366732F08E8e6B88519dC3E827e04616Fc9',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.2546',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 36,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.helmet,
  //   contractAddress: {
  //     97: '',
  //     56: '0x9F23658D5f4CEd69282395089B0f8E4dB85C6e79',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.81',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 35,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.btcst,
  //   contractAddress: {
  //     97: '',
  //     56: '0xB6fd2724cc9c90DD31DA35DbDf0300009dceF97d',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.011574',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 34,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bscx,
  //   contractAddress: {
  //     97: '',
  //     56: '0x108BFE84Ca8BCe0741998cb0F60d313823cEC143',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.17361',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 33,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.ten,
  //   contractAddress: {
  //     97: '',
  //     56: '0x4A26b082B432B060B1b00A84eE4E823F04a6f69a',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.05787',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 32,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.balbt,
  //   contractAddress: {
  //     97: '',
  //     56: '0x3cc08B7C6A31739CfEd9d8d38b484FDb245C79c8',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.4166',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 31,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.asr,
  //   contractAddress: {
  //     97: '',
  //     56: '0xd18E1AEb349ef0a6727eCe54597D98D263e05CAB',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 30,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.atm,
  //   contractAddress: {
  //     97: '',
  //     56: '0x68C7d180bD8F7086D91E65A422c59514e4aFD638',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 29,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.og,
  //   contractAddress: {
  //     97: '',
  //     56: '0xbE65d7e42E05aD2c4ad28769dc9c5b4b6EAff2C7',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 28,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.reef,
  //   contractAddress: {
  //     97: '',
  //     56: '0x1500fa1afbfe4f4277ed0345cdf12b2c9ca7e139',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '115.74',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 27,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.ditto,
  //   contractAddress: {
  //     97: '',
  //     56: '0x624ef5C2C6080Af188AF96ee5B3160Bb28bb3E02',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01157',
  //   sortOrder: 999,
  //   isFinished: false,
  // },
  // {
  //   sousId: 26,
  //   stakingToken: tokens.twt,
  //   earningToken: tokens.cake,
  //   stakingLimit: 1000,
  //   contractAddress: {
  //     97: '',
  //     56: '0x0554a5D083Abf2f056ae3F6029e1714B9A655174',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.248',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 24,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.juv,
  //   contractAddress: {
  //     97: '',
  //     56: '0x543467B17cA5De50c8BF7285107A36785Ab57E56',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.02',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 25,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.psg,
  //   contractAddress: {
  //     97: '',
  //     56: '0x65aFEAFaec49F23159e897EFBDCe19D94A86A1B6',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.02',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 21,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.vai,
  //   contractAddress: {
  //     97: '',
  //     56: '0x1AD34D8d4D79ddE88c9B6b8490F8fC67831f2CAe',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.104',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 20,
  //   stakingToken: tokens.bnb,
  //   earningToken: tokens.cake,
  //   stakingLimit: 10,
  //   contractAddress: {
  //     97: '',
  //     56: '0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a',
  //   },
  //   poolCategory: PoolCategory.BINANCE,
  //   harvest: true,
  //   tokenPerBlock: '0.5',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 19,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bnb,
  //   contractAddress: {
  //     97: '',
  //     56: '0x326D754c64329aD7cb35744770D56D0E1f3B3124',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0041',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 18,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.blink,
  //   contractAddress: {
  //     97: '',
  //     56: '0x42Afc29b2dEa792974d1e9420696870f1Ca6d18b',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '23.14',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 17,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.blink,
  //   contractAddress: {
  //     97: '',
  //     56: '0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '23.14',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 16,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.unfi,
  //   contractAddress: {
  //     97: '',
  //     56: '0xFb1088Dae0f03C5123587d2babb3F307831E6367',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.02893',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 15,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.twt,
  //   contractAddress: {
  //     97: '',
  //     56: '0x9c4EBADa591FFeC4124A7785CAbCfb7068fED2fb',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '5',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 14,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.hard,
  //   contractAddress: {
  //     97: '',
  //     56: '0x90F995b9d46b32c4a1908A8c6D0122e392B3Be97',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.346',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 13,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.broobee,
  //   contractAddress: {
  //     97: '',
  //     56: '0xdc8c45b7F3747Ca9CaAEB3fa5e0b5FCE9430646b',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   harvest: true,
  //   tokenPerBlock: '12.5',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 12,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.stax,
  //   contractAddress: {
  //     97: '0xd95e01fd9a860a33c5c4d60e220c8e8cfbdc0e34',
  //     56: '0xFF02241a2A1d2a7088A344309400E9fE74772815',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   harvest: true,
  //   tokenPerBlock: '0.2',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 11,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.nar,
  //   contractAddress: {
  //     97: '0xd95e01fd9a860a33c5c4d60e220c8e8cfbdc0e34',
  //     56: '0xDc938BA1967b06d666dA79A7B1E31a8697D1565E',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   harvest: true,
  //   tokenPerBlock: '1',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 10,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.nya,
  //   contractAddress: {
  //     97: '0xd95e01fd9a860a33c5c4d60e220c8e8cfbdc0e34',
  //     56: '0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '10',
  //   isFinished: true,
  // },
  // {
  //   sousId: 9,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.ctk,
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0x21A9A53936E812Da06B7623802DEc9A1f94ED23a',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.5',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 8,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.twt,
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 7,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.inj,
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.25',
  //   sortOrder: 999,
  //   isFinished: true,
  // },

]

export default pools
