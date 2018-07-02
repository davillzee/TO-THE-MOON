<?php
  include "connectdb.php";

      $result = Array(); 
       
      $commentnaja = $_POST['comname'];
      $id_project = $_POST['ID_project'];

      $sq = "UPDATE project SET conceptual='$commentnaja' WHERE id_project='$id_project'";
      mysqli_query($link, $sq);
  
      $Project_name = "SELECT * FROM project WHERE id_project='$id_project'";
      $geb2 = mysqli_query($link, $Project_name);
      $show2 = mysqli_fetch_array($geb2);
      $result["text"] =$show2['conceptual'];
  
    echo json_encode($result);
?>
