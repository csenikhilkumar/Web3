import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react"

export function Airdrop(){
    const wallet = useWallet()
    const {connection} = useConnection()
    const [amount, setAmount] = useState("")

    async function sendAirdropToUser(){
        if (!amount) {
            alert("Please enter an amount")
            return
        }
        await connection.requestAirdrop(wallet.publicKey, parseFloat(amount) * 1000000000) // Convert SOL to lamports
    }

    return(
        <div>
            <input 
                type="text" 
                placeholder="amount" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={sendAirdropToUser}>send Airdrop</button>
        </div>
    )
}