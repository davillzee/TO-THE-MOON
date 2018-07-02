<?php
	 header("Access-Control-Allow-Origin: *");
     $link= mysqli_connect('localhost', 'root', 'root',$_POST["db_name"]) 
     or die('Could not connect: ' . mysqli_error());

          $array = Array();
         if(strpos($_POST["sql"], 'select')!=true){
         $query = mysqli_query($link,$_POST["sql"]);
        
         if(mysqli_num_rows($query)==0){
             $array["num"] = 0;    
         }else{
             $array["num"] = mysqli_num_rows($query);
           
             for($i = 0;$i < mysqli_num_rows($query);$i++){
                $temp =  mysqli_fetch_assoc($query);
                array_push($array,$temp);
             }
         }
         }else{
            $array["num"] = 0;
         }
        

         echo json_encode($array);
        
?>