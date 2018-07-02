<?php
  include "connectdb.php";
  
  $result = Array(); 
  $Projectnaja = $_POST['Proname2']; 
  $commentnaja = $_POST['comname2'];

  $PnameA = "SELECT * FROM project WHERE project_name = '$Projectnaja'";
  $geb = mysqli_query($link, $PnameA);
        $show1 = mysqli_fetch_array($geb);
        $showPname = $show1['project_name'];
        

  $comA = "SELECT * FROM project WHERE conceptual = '$commentnaja'";
  $geb2 = mysqli_query($link, $comA);
        $show2 = mysqli_fetch_array($geb2);
        $showCOM = $show2['conceptual'];


if($Projectnaja=$showPname){

    $result["PJname2"] = $showPname;
    $result["Comment2"] = $showCOM;

}
else{
    $result["PJname2"] = null;
    $result["Comment2"] = null;
}
  echo json_encode($result);


  ?>