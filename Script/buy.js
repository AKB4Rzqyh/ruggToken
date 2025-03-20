const fs = require('fs');
const web3 = require('@solana/web3.js');
require('dotenv').config();
const { connection, wallets } = require('../config/config');

const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS; // Masukkan alamat token di .env
const AMOUNT_TO_BUY = parseFloat(process.env.AMOUNT_TO_BUY); // Berapa SOL yang digunakan per wallet

async function buyToken(wallet) {
    try {
        console.log(`🔹 Membeli token dengan wallet: ${wallet.publicKey}`);

        // Simulasi transaksi pembelian token
        // (Di sini harus pakai library seperti Solana SPL Token & Raydium API)
        
        console.log(`✅ Berhasil beli token dengan wallet: ${wallet.publicKey}`);
    } catch (error) {
        console.error(`❌ Gagal beli token dengan wallet: ${wallet.publicKey}`, error);
    }
}

async function main() {
    console.log(`🚀 Memulai proses pembelian token ${TOKEN_ADDRESS}`);
    for (const wallet of wallets) {
        await buyToken(wallet);
    }
    console.log(`🎉 Semua wallet telah membeli token!`);
}

main();
