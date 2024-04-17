<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

include "kasbon.php";

                $insert = mysqli_query($kon,"INSERT INTO tbl_user(
                    `nis`,`asal_sekolah`,`nama`,`password`,`email`)
                    VALUES (
                        '$_POST[nis]',
                        '$_POST[asal_sekolah]',
                        '$_POST[nama]',
                        '$_POST[email]',
                        '$_POST[password]')");

if($insert){
    $result = json_encode(array('error' => false,'msg' => 'Data Berhasil disimpan'));
} else {
    $result = json_encode(array('error' => true,'msg' => 'Data Gagal disimpan'));
}

echo $result;

?>