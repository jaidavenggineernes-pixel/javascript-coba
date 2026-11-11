console.log("==========================================");
console.log("   PROGRAM KASIR SEDERHANA TOKO KOMPUTER  ");
console.log("==========================================");

const namaBarang = "Flashdisk Sandisk 32GB";
const hargaSatuan = 65000;
const jumlahBeli = 3;
const persentaseDiskon = 10;

let subtotal = hargaSatuan * jumlahBeli;
let potonganHarga = (subtotal * persentaseDiskon) / 100;
let totalBayar = subtotal - potonganHarga;

let uangDibayar = 200000;
let kembalian = uangDibayar - totalBayar;

console.log("Nama Barang       : " + namaBarang);
console.log("Harga Satuan      : Rp " + hargaSatuan);
console.log("Jumlah Beli       : " + jumlahBeli + " pcs");
console.log("------------------------------------------");
console.log("Subtotal          : Rp " + subtotal);
console.log("Diskon (" + persentaseDiskon + "%)      : Rp " + potonganHarga);
console.log("Total Harus Bayar : Rp " + totalBayar);
console.log("------------------------------------------");
console.log("Uang Pembayaran   : Rp " + uangDibayar);
console.log("Uang Kembalian    : Rp " + kembalian);
console.log("==========================================");
console.log("Status: Transaksi Berhasil!");
