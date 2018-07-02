<?php
include "connectdb.php";
    $Value_checkbox_array = $_POST['value_checkbox'];
    $hour_data = [];

    for($i = 0 ; $i < count($Value_checkbox_array); $i++){

    $project_id_checkbox = $Value_checkbox_array[$i]['check_box_value'][0];
    $feature_id_checkbox = $Value_checkbox_array[$i]['check_box_value'][1];
    $task_id_checkbox = $Value_checkbox_array[$i]['check_box_value'][2];
    $colum_id_checkbox = $Value_checkbox_array[$i]['check_box_value'][3];
    $Value_input = $Value_checkbox_array[$i]['input_value'];
    $end_work_date = $Value_checkbox_array[$i]['last_day'];
     
      $sql = "UPDATE greentable SET real_hour = $Value_input , last_date = '$end_work_date' , status_work = 1
              WHERE colum_id = '$colum_id_checkbox' AND id_project = $project_id_checkbox AND 
              id_feature = $feature_id_checkbox AND id_task = $task_id_checkbox";
        
        mysqli_query($link , $sql);

      $sql_select_hour = "SELECT colum_id , real_hour , es_hour FROM greentable where colum_id = '$colum_id_checkbox'  AND real_hour != 0";
      $hour_query = mysqli_query($link , $sql_select_hour);
    } 

    while($data = mysqli_fetch_assoc($hour_query)){
       $hour_data_obj -> colum_id = $data['colum_id'];
	     $hour_data_obj -> real_hour = $data['real_hour'];
       $hour_data_obj -> es_hour = $data['es_hour'];
       array_push($hour_data,$hour_data_obj);
    }
    echo json_encode($hour_data);
     
    
       

       
       

?>