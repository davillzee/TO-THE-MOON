<?php
  include "connectdb.php";

  $result = Array(); 

  
  $task = $_POST["taskB"];
  $IDproject = $_POST["ID_project"];
  $Get_id_feature = $_POST["get_id_feature"];
  $descriptionm = $_POST["Descriptionnaa"];
  // echo "task :".$task."       ";
  // echo "IDproject :".$IDproject."       ";
  // echo "Get_id_feature :".$Get_id_feature."       ";
  // echo "descriptionm :".$descriptionm."       ";

      $Pname = "SELECT * FROM task WHERE task_name = '$task'";
      $geb = mysqli_query($link, $Pname);
      $show = mysqli_fetch_array($geb);
      $shownaja = $show['task_name'];
      // echo "taskName GET :".$shownaja."       ";

      $Pname1 = "SELECT * FROM feature WHERE feature_name = '$Get_id_feature'";
      $geb1 = mysqli_query($link, $Pname1);
      $show2 = mysqli_fetch_array($geb1);
      $showna = $show2['id_feature'];

      // echo "feature GET :".$showna."       ";
//////////////////////////////////////////////////////////////////////////////////////////////////
 if($task!=$shownaja){ 
   
        $sq = "INSERT INTO task (task_name,id_project,id_feature,Descriptiona) VALUES ('$task','$IDproject','$showna','$descriptionm')";
        mysqli_query($link, $sq);

        $feature1 = "SELECT * FROM task WHERE task_name = '$task'";
        $geb3 = mysqli_query($link, $feature1);
        $show1 = mysqli_fetch_array($geb3);

        $result["taskk"] = $show1['task_name'];
        $result["ID_featuree"] = $show1['id_feature'];
        $result["Descriptionnew"] = $show1['Descriptiona'];
        
}
else{
  $result["NONE"] = " PRO ERROR: Could not able to execute $sq. " . mysqli_error($link);
}

   echo json_encode($result);

?>