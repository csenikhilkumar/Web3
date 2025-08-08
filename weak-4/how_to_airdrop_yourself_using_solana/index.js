const {Connection,LAMPORTS_PER_SOL,clusterApiUrl,PublicKey} = require("@solana/web3.js")

const connection = new Connection(clusterApiUrl("devnet"))

async function AirDrop(publicKey,amount){
    const airdropSignature = await connection.requestAirdrop(new PublicKey(publicKey),amount)
    const confirmTransaction = await connection.confirmTransaction({signature:airdropSignature})


}


AirDrop("EVncNuHtUswXa1qk7vBRaGE9pezR6BeXRVn1WgiqgCst",LAMPORTS_PER_SOL).then(signature=>{
    console.log("airdrop signature",signature)
})