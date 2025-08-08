"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bip39_1 = require("bip39");
const words = (0, bip39_1.generateMnemonic)(256);
console.log(words);
const seedPhares = (0, bip39_1.mnemonicToSeedSync)(words);
console.log(seedPhares);
