const fs = require('fs');
const web3 = require('@solana/web3.js');
require('dotenv').config();
const { connection, wallets } = require('../config/config');

const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS; // Alamat token di .env
const SLIPPAGE = parseFloat(process.env.SLIPPAGE) || 1.0; // Toleransi harga saat jual

async function sellToken(wallet) {
    try {
        console.log(`🔹 Menjual token dari wallet: ${wallet.publicKey}`);

        // Simulasi transaksi penjualan token
        // (Harus diintegrasikan dengan AMM seperti Raydium atau Orca)
        
        console.log(`✅ Berhasil menjual token dari wallet: ${wallet.publicKey}`);
    } catch (error) {
        console.error(`❌ Gagal menjual token dari wallet: ${wallet.publicKey}`, error);
    }
}

async function main() {
    console.log(`🚀 Memulai proses penjualan token ${TOKEN_ADDRESS}`);
    for (const wallet of wallets) {
        await sellToken(wallet);
    }
    console.log(`🎉 Semua wallet telah menjual token!`);
}

main();
