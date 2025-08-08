"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ed25519_1 = __importStar(require("@noble/ed25519"));
const web3_js_1 = require("@solana/web3.js");
const tweetnacl_1 = __importDefault(require("tweetnacl"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const privateKey = ed25519_1.default.utils.randomPrivateKey();
        console.log(privateKey);
        const message = new TextEncoder().encode("hello");
        const publicKey = yield (0, ed25519_1.getPublicKeyAsync)(privateKey);
        console.log(publicKey);
        const signature = yield ed25519_1.default.signAsync(message, privateKey);
        const isValid = yield ed25519_1.default.verifyAsync(signature, message, publicKey);
        console.log(isValid);
    });
}
// main()
//  using solana/web3 library for transation 
function solana() {
    return __awaiter(this, void 0, void 0, function* () {
        const keypair = web3_js_1.Keypair.generate();
        //@ts-ignore
        const privateKey = keypair.secretKey;
        const publicKey = keypair.publicKey.toBase58();
        console.log("priavte" + privateKey);
        console.log("public" + publicKey);
        const message = new TextEncoder().encode("hello");
        const signature = tweetnacl_1.default.sign.detached(message, privateKey);
        const isValid = tweetnacl_1.default.sign.detached.verify(message, signature, keypair.publicKey.toBytes());
        console.log(isValid);
    });
}
solana();
