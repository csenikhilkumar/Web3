import ed255, { getPublicKeyAsync } from "@noble/ed25519"
import { Keypair} from "@solana/web3.js"
import nacl from "tweetnacl"


async function main(){
    const privateKey = ed255.utils.randomPrivateKey()
    console.log(privateKey)
    const message = new TextEncoder().encode("hello")
    const publicKey = await getPublicKeyAsync(privateKey)
    console.log(publicKey)
    const signature = await ed255.signAsync(message,privateKey)
    const isValid = await ed255.verifyAsync(signature,message,publicKey)
    console.log(isValid)
}


// main()



//  using solana/web3 library for transation 
async function solana(){
    const keypair = Keypair.generate()
    //@ts-ignore
   const privateKey = keypair.secretKey
   const publicKey = keypair.publicKey.toBase58();
   console.log("priavte" + privateKey)
   console.log("public"+publicKey)

   const message = new TextEncoder().encode("hello")
   const signature = nacl.sign.detached(message,privateKey)

   const isValid = nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes()
   )
   console.log(isValid)
}


solana()