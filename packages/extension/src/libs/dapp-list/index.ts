import { NetworkNames } from "@enkryptcom/types";

const lists: Partial<Record<NetworkNames, string>> = {
  [NetworkNames.Ethereum]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/eth.json",
  [NetworkNames.Binance]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/bsc.json",
  [NetworkNames.Matic]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/matic.json",
  [NetworkNames.EthereumClassic]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/etc.json",
  [NetworkNames.Kusama]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/ksm.json",
  [NetworkNames.Polkadot]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/dot.json",
  [NetworkNames.Acala]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/aca.json",
  [NetworkNames.Karura]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/kar.json",
  [NetworkNames.Moonbeam]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/glmr.json",
  [NetworkNames.Moonriver]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/movr.json",
  [NetworkNames.Astar]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/astr.json",
  [NetworkNames.AstarEVM]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/astr.json",
  [NetworkNames.Shiden]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/sdn.json",
  [NetworkNames.ShidenEVM]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/sdn.json",
  [NetworkNames.Okc]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/okc.json",
  [NetworkNames.Optimism]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/op.json",
  [NetworkNames.Canto]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/canto.json",
  [NetworkNames.Bifrost]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/bifrost.json",
  [NetworkNames.BifrostKusama]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/bifrost.json",
  [NetworkNames.Edgeware]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/edg.json",
  [NetworkNames.ZkSyncGoerli]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/zksyncgoerli.json",
  [NetworkNames.ZkSync]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/zksync.json",
  [NetworkNames.Rootstock]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/rootstock.json",
};

export default lists;
