<?php
    include "connectdb.php";
    $tank_complete_hour = $_POST['tank_complete_hour'];
    $Project_id = $_POST['project_id'];

    $sql_update_hour = "UPDATE project SET finish_hour = '$tank_complete_hour'
            WHERE id_project = '$Project_id' ";
    mysqli_query($link , $sql_update_hour);
?>
