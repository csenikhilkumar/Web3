"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as ed from "@noble/ed25519"
const tweetnacl_1 = __importDefault(require("tweetnacl"));
const web3_js_1 = require("@solana/web3.js");
// async function main (){
//     //generate a secure private key 
//     const privateKey = ed.utils.randomPrivateKey()
//     console.log(privateKey)
//     //convert the message into uint8array 
//     const messege = new TextEncoder().encode("hello i am nikhil ")
//     console.log(messege)
//     //generate the public key from private key 
//     const pubkey = await ed.getPublicKeyAsync(privateKey)
//     console.log(pubkey)
//     //sign the messege 
//     const signature = await ed.signAsync(messege,privateKey)
//     console.log(signature)
//     // verify the signature 
//     const isValid = await  ed.verifyAsync(signature,messege,pubkey)
//     console.log(isValid)
// }
// main();
const keypairs = web3_js_1.Keypair.generate();
const publicKey = keypairs.publicKey.toString();
const privateKey = keypairs.secretKey;
const message = new TextEncoder().encode("hey i am nikhil");
const signature = tweetnacl_1.default.sign.detached(message, privateKey);
const verify = tweetnacl_1.default.sign.detached.verify(message, signature, keypairs.publicKey.toBytes());
console.log(verify);
