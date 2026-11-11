console.log("==========================================");
console.log("    SISTEM PENENTUAN GRADE NILAI SISWA    ");
console.log("==========================================");

let namaSiswa = "Alif Rizqi Adi Al Jailani";
let nilaiTugas = 85;
let nilaiUjian = 88;

let nilaiAkhir = (nilaiTugas + nilaiUjian) / 2;

let grade = "";
let keterangan = "";

if (nilaiAkhir >= 90) {
    grade = "A";
    keterangan = "Sangat Memuaskan (LULUS)";
} else if (nilaiAkhir >= 80) {
    grade = "B";
    keterangan = "Baik (LULUS)";
} else if (nilaiAkhir >= 70) {
    grade = "C";
    keterangan = "Cukup (LULUS)";
} else if (nilaiAkhir >= 60) {
    grade = "D";
    keterangan = "Kurang (REMEDIAL)";
} else {
    grade = "E";
    keterangan = "Sangat Kurang (TIDAK LULUS)";
}

console.log("Nama Siswa   : " + namaSiswa);
console.log("Nilai Tugas  : " + nilaiTugas);
console.log("Nilai Ujian  : " + nilaiUjian);
console.log("------------------------------------------");
console.log("Nilai Akhir  : " + nilaiAkhir);
console.log("Predikat     : " + grade);
console.log("Status       : " + keterangan);
console.log("==========================================");
