<?php

include('connect.php');




if(count($_POST) > 0){
	
        $post_id    = $_POST["post_id"];

		$sql = "DELETE FROM `posts` WHERE post_id='$post_id'"; 
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        

		mysqli_close($conn);
	
}


?>




