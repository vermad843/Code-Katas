function int32ToIp(int32){
    const binaryString = int32.toString(2)
    .padStart(32,'0');
    const firstOctet = binaryString.slice(0, 8);
    const secondOctet = binaryString.slice(8, 16);
    const thirdOctet = binaryString.slice(16, 24);
    const fourthOctet = binaryString.slice(24, 32);
    console.log(parseInt(firstOctet,2));
    return `${parseInt(firstOctet,2)}.${parseInt(secondOctet,2)}.${parseInt(thirdOctet,2)}.${parseInt(fourthOctet,2)}`

  }




console.log( int32ToIp(2154959208), "128.114.17.104"); 
console.log( int32ToIp(0), "0.0.0.0", );
console.log( int32ToIp(2149583361), "128.32.10.1", );


// 32 bit number : 4 byte = 4 * 8 = 32 bit 
// 1 byte = 8 bit;
// .toString() : giving 0's and 1's for 32bit
// padStart() : is used for int32ToIp(0) case 
// parseInt : will convert string to number()