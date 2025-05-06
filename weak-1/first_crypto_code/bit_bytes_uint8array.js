// bit
const x = 28888
console.log(x)

// bites
const bytes = [255,29,30,40]
console.log(bytes)

const byte = new Uint8Array([255,29,245,89]);
byte[0]=300;
console.log(byte)



// converts ascii to bytes 
function asciiToBytes(args){
    const arr = []
    for(i=0;i<args.length;i++){
       const char = args[i]
       arr.push(char.charCodeAt(0))
    } 
    return new Uint8Array(arr)
}



const ascii = "nikhil"
const bytess = asciiToBytes(ascii)
console.log(bytess)


