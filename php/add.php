<?php
include "connectdb.php";
 $PROJECTNAME = $_POST['projectname'];
 $FEATURENAME = $_POST['featurename'];
 $TASKNAME = $_POST['taskname'];

 $sql = "INSERT INTO greentable (projectname) VALUES ('$PROJECTNAME')";

$result_project = mysqli_query($link,$sql);
echo $PROJECTNAME;

?>