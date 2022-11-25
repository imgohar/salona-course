const {Connection,PublicKey,clusterApiUrl,LAMPORTS_PER_SOL} = require("@solana/web3.js");

const { Keypair } = require("@solana/web3.js");

let keypair = Keypair.generate();

const publicKey = new PublicKey(keypair._keypair.publicKey);
const secretKey = keypair._keypair.secretKey;


console.log(publicKey,secretKey)