<?php
  include "connectdb.php";

  $result = Array(); 

  $feature = $_POST['featureB']; 
  $IDproject = $_POST['ID_project'];
  $PnameA = "SELECT * FROM feature WHERE feature_name = '$feature'";
      $geb = mysqli_query($link, $PnameA);
      $show1 = mysqli_fetch_array($geb);
      $showPname = $show1['feature_name'];

if($feature!=$showPname){

        $sql = "INSERT INTO feature (feature_name,id_project) VALUES ('$feature','$IDproject')";
        mysqli_query($link, $sql);
        $feature1 = "SELECT * FROM feature WHERE feature_name = '$feature'";
        $geb = mysqli_query($link, $feature1);
        $show1 = mysqli_fetch_array($geb);
        
        $result["feature"] = $show1["feature_name"];
        $result["ID_feature"] = $show1["id_feature"];

}
// else{
//   $result["NONE"] = " PRO ERROR: Could not able to execute $sq. " . mysqli_error($link);
// }

   echo json_encode($result);

?>