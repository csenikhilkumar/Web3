const bs58 = require("bs58")
//convert ascii to base64
const newArr = new Uint8Array([72,101,108,108,111])
const base64Incode = Buffer.from(newArr).toString("base64");
console.log(base64Incode)







function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String); // Output: Base58 encoded string