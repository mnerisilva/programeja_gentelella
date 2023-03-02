<?php

include('connect.php');

$id_conteudo = $_POST['id_conteudo'];
$user_id	 = $_POST['user_id'];

		
		//$sql = "SELECT * FROM posts WHERE id_conteudo = '$id_conteudo' ORDER BY post_id";
		$sql = "SELECT * FROM posts WHERE user_id = '$user_id' ORDER BY post_id";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['post_id' => $row["post_id"], 'post_title' => $row["post_title"], 'post' => $row["post"], 'post_dateupdate' => $row["post_dateupdate"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




