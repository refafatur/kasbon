<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

include "kasbon.php";

                $insert = mysqli_query($kon,"INSERT INTO tbl_keluhan(
                    `keluhan`)
                    VALUES ('$_POST[keluhan]')");

if($insert){
    $result = json_encode(array('error' => false,'msg' => 'Keluhan Berhasil disimpan'));
} else {
    $result = json_encode(array('error' => true,'msg' => 'Keluhan Gagal disimpan'));
}

echo $result;

?>