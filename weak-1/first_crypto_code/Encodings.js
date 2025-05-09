function arraytoHax (bytearray){
    let haxstring = ""
    for (let i =0; i < bytearray.length;i++){
        haxstring+=bytearray[i].toString(16).padStart();

    }
    return haxstring;

}

const str = "hello"
const encode = new TextEncoder().encode(str)
const byteArray =new Uint8Array( [ 104, 101, 108, 108, 111 ])
const hexstring = arraytoHax(byteArray)
console.log(encode)
console.log(hexstring)



// binary to decimal 
function converter (str){
    let decimal = 0
    for(let i = 0 ; i < str.length;i++){
        const bit = parseInt(str.length-1 - i )
        decimal += bit * Math.pow(2,i)
    }
    console.log(decimal)
}

const str1 = "010101010101"
converter(str1)


