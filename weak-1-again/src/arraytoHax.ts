async function arrayToHax(byteArray:any){
    let hexcode = ""
for(let i =0 ; i<byteArray.length ; i ++){
    hexcode += byteArray[i].toString(16).padStart(2,'0')

}
return hexcode
}



const str  = "hello"
const encode = new TextEncoder().encode(str)
const byteArray = new Uint8Array([124,255,233,165])
console.log(byteArray)
// console.log("4".toString(16).padStart(2,'0'))
console.log(arrayToHax(byteArray))



