<?php
include "connectdb.php";
    $project_list = $_POST['projectlist_array'];
   
    for($i = 0 ; $i < count($project_list); $i++){
        
        if($project_list[$i] == null){
            continue; 
        }else{
            $id_colum = $project_list[$i]['col_id'];
            $id_user = $project_list[$i]['user_id'];
            $id_project = $project_list[$i]['project_id'];
            $id_feature = $project_list[$i]['feature_id'];
            $id_task = $project_list[$i]['task_id'];
            $time = $project_list[$i]['time'];
            $es_hour = $project_list[$i]['eshour'];

            $sql = "INSERT INTO greentable (colum_id , username_id , id_project , id_feature, id_task, es_hour , t_hour) 
            VALUES ('$id_colum' , '$id_user', '$id_project' , '$id_feature' ,  '$id_task',  '$es_hour' , '$time' )";
            mysqli_query($link , $sql);
         }
      }    
     echo "COMPLETE";
?>