import { generateMnemonic,validateMnemonic,mnemonicToSeedSync } from "bip39";

const words =generateMnemonic(256)
console.log(words)
const seedPhares = mnemonicToSeedSync(words)

console.log(seedPhares)