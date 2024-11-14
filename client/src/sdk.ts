import { SmartWalletSDK } from "@asgarovf/smart-wallet-sdk";

const contracts: Record<string, string> = {
  batchCaller: "0x0691E4f63225ef7d62B5A3F60C6B8c219aa2D829",
  implementation: "0xF60101b241901F9dff85b518600ec6e1AEdac551",
  registry: "0xf3acc55d66A190C8D2d93e1E8AdF9Ec5991CB69a",
  gaslessPaymaster: "0x2d6FdD5905986aa24bAfCbaec38822cB5735947c",
  claveProxy: "0xf04f702861092A70de260391f14C38e2798FCBcD",
  passkeyValidator: "0x86b29D87Cb4aF4652747EB38A2bA678e47ad5d21",
  accountFactory: "0x78700A76524aCFbf0566997AAd10AB9FcBF9203B"
};

export const sdk = new SmartWalletSDK({
  chainId: 300,
  contracts
});