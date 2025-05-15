// import * as ed from "@noble/ed25519"
import nacl from "tweetnacl"
import sol, { Keypair } from "@solana/web3.js"


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





const keypairs = Keypair.generate()


const publicKey = keypairs.publicKey.toString()
const privateKey = keypairs.secretKey

const message = new TextEncoder().encode("hey i am nikhil")

const signature = nacl.sign.detached(message,privateKey)


const verify = nacl.sign.detached.verify(
    message,
    signature,
    keypairs.publicKey.toBytes()
)


console.log(verify)




