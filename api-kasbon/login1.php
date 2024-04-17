<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

include "kasbon.php"; // Pastikan Anda telah menyertakan file kasbon.php yang berisi koneksi database

// Ambil data yang dikirimkan melalui POST
$nis = $_POST['nis'];


// Lakukan query ke database untuk mengambil data berdasarkan NIS
$query = "SELECT * FROM `tbl_user` WHERE `nis` = '$nis'";
$result = $conn->query($query);

// Memeriksa apakah query berhasil dieksekusi dan apakah ada baris hasilnya
if ($result && $result->num_rows > 0) {
    // Jika ada baris hasil, kirim respon ke klien dengan data yang ditemukan
    $row = $result->fetch_assoc();
    $response = array('error' => false, 'data' => $row);
} else {
    // Jika tidak ada baris hasil, kirim respon ke klien bahwa data tidak ditemukan
    $response = array('error' => true, 'message' => 'Data tidak ditemukan');
}

// Encode respon ke format JSON dan kirimkan ke klien
echo json_encode($response);

// Tutup koneksi database
$conn->close();
?>
