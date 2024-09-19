//1) What is Os module -> Operating system module, it helps in those project where we need to know about our os
    //like if we want to know the Ram,hostname,architecture(64/32 bit), platform etc
//2) Important functions for OS module

const os = require("os");
// console.log(os); gives all the functions

//for knowing architecture
console.log(os.arch());//(64/32 bit)

//freemem-> free memory means how much memoey(RAM) is free now in my device in bits
console.log(os.freemem()/(1024*1024*1024)); //(1024*1024*1024) because we want to see it in GB
console.log(os.totalmem())// for knowing total RAM in bit

console.log(os.hostname());//to know the hostname like DESKTOP-9EJ545I
console.log(os.platform());//gives on which os you are working MAC or Windows etc

//It gives information like uid,gid,username,homedir,shell
console.log(os.userInfo());