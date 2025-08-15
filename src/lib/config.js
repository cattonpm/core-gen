const mode = "mainnet";
const status = "production";

export default {
    rpcUrl: mode === "mainnet" && status === "production" ? "https://api.coregen.cc" : "http://localhost:443",
    indexerUrl: mode === "mainnet" && status === "production" ? "https://indexer.coregen.cc" : "http://localhost:444",
    chainId: mode === "mainnet"  ? "0x45c" : "",
    ethRpcUrl: mode === "mainnet"  ? "https://rpc.coredao.org" : "",
    chainName: mode === "mainnet"  ? "Core Blockchain" : "Core Testnet",
    nativeCurrency: {
        name: "CORE",
        symbol: "CORE",
        decimals: 18
    },
    blockExplorerUrls: "https://scan.coredao.org",
    site: "https://coregen.cc",
    twitter: "https://x.com/coregen_cc",
    discord: "https://discord.gg/eNXuhN22JX"
}

