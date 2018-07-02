<?php
  include "connectdb.php";

      $result = Array(); 
      $Projectnaja = $_POST['Proname']; 
      $commentnaja = $_POST['comname'];

      $PnameA = "SELECT * FROM project WHERE project_name = '$Projectnaja'";
      $geb = mysqli_query($link, $PnameA);
            $show1 = mysqli_fetch_array($geb);
            $showPname = $show1['project_name'];
 
if($Projectnaja != $showPname){
      
    $sql = "INSERT INTO project (project_name,conceptual) VALUES ('$Projectnaja','$commentnaja')";
    mysqli_query($link, $sql);

   $Project_name = "SELECT * FROM project WHERE project_name = '$Projectnaja'";
   $geb2 = mysqli_query($link, $Project_name);
   $show2 = mysqli_fetch_array($geb2);

   $result["IDor"] = $show2['id_project'];
   $result["project_name2"] = $show2['project_name'];
   $result["text"] =$show2['conceptual'];

}
// else{
//       $result["NONE"] = " No save data because  project name = project Original ";
// }
    echo json_encode($result);
?>
