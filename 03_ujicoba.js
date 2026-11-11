console.log("==========================================");
console.log("   DAFTAR PERANGKAT LAB RPL               ");
console.log("==========================================");

let daftarPerangkat = [
    "MacBook M6 Pro Max",
    "Monitor Lenovo 24 Inch",
    "Keyboard Mechanical",
    "Mouse Wireless",
    "Router SandyaNetwork"
];

for (let i = 0; i < daftarPerangkat.length; i++) {
    console.log((i + 1) + ". " + daftarPerangkat[i]);
}

console.log("\n==========================================");
console.log("      HITUNG MUNDUR SIMULASI SERVER         ");
console.log("==========================================");

let hitungan = 5;

while (hitungan > 0) {
    console.log("Server reboot dalam: " + hitungan + " detik...");
    hitungan--;
}

console.log("Server berhasil di-restart!");
console.log("==========================================");
