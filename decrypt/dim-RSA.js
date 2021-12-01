/**
 * @file dim-RSA.js.
 * @description Implements encrypt, decrypt in node.js
 * @author Dimitris Vainanidis,
 * @copyright Dimitris Vainanidis, 2021
 */

/* jshint strict:false*/
'use stict';

const crypto = require("crypto");
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;
// console.log(path.resolve(__dirname,'./private.pem'));
// console.log(privateKey);
// console.log(publicKey);

function encrypt(textToEncrypt) {
    const buffer = Buffer.from(textToEncrypt, 'utf8');
    const encrypted = crypto.publicEncrypt({ key: publicKey, padding: 
        crypto.constants.RSA_PKCS1_PADDING }, buffer);
    return encrypted.toString('base64');
  }



function decrypt(textToDecrypt) {
    const buffer = Buffer.from(textToDecrypt, 'base64');
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey.toString(),
        passphrase: '',
        padding:crypto.constants.RSA_PKCS1_PADDING
      },
      buffer,
    );
    return decrypted.toString('utf8');
  }
 
    //testing algorithms 
    let encryptionTestingString = "Cryptography algorithms have been tested and are working properly!";
    let enc = encrypt(encryptionTestingString);
    // console.log(enc);
    let dec = decrypt(enc);
    if (encryptionTestingString==dec){
        //different colors and back to normal color
        console.log("\x1b[32m", encryptionTestingString,'\x1b[0m');  
    } else {
        console.error("\x1b[31m Cryptography algorithms are not working properly \x1b[0m");        
    }
  

module.exports = {encrypt,decrypt};

