<?php
 include "connectdb.php";

$NAME = $_POST["Username"];
$PASS = $_POST["Password"];


$sql = "SELECT * FROM menber WHERE username = '$NAME' AND passwords = '$PASS' ";

$result = mysqli_query($link,$sql);

$data = mysqli_fetch_array($result);
	$User -> username = $data['username'];
	$User -> password = $data['passwords'];
	$User -> status = $data['status'];
	$myJSON = json_encode($User);

echo $myJSON;

mysqli_close($link);
?>