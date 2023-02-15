<?php

include('connect.php');


			
mysqli_set_charset($conn, "utf8");


if(count($_POST) > 0){



		$operation			= addslashes($_POST['operation']);
		$post_id_edit		= addslashes($_POST['post_id_edit']);
        $id_conteudo		= intval($_POST['id_conteudo']);
        $trilha_id			= intval($_POST['trilha_id']);
        $user_id			= intval($_POST['user_id']);
        $post_title			= addslashes($_POST['post_title']);
        $post				= addslashes($_POST['post']);


		/*echo $id_conteudo.'<br>';
		echo $trilha_id.'<br>';
		echo $user_id.'<br>';
		echo $post_title.'<br>';
		echo $post.'<br>';*/

		//die();

			$arr_json = [];
			$contador = 0;

		if ($operation == 'save'){
			$sql_save = "INSERT INTO `posts`(`id_conteudo`, `trilha_id`, `user_id`, `post_title`, `post`, `post_datepublish`, `post_dateupdate`) VALUES ('$id_conteudo', '$trilha_id', '$user_id', '$post_title', '$post', NOW(), NOW())";

			if (mysqli_query($conn, $sql_save)) {
				//echo json_encode(array("statusCode"=>200));
				$arr_json[0] = ["status" => "save"];
				//echo json_encode($arr_json);
				echo json_encode($arr_json);
			} 
			else {
				//echo "Error: " . $sql . "<br>" . mysqli_error($conn);
			}
			$ui = mysqli_insert_id($conn);
			//$arr_json[0] = ["ultimo_id_inserido" => $ui];
			//echo json_encode($arr_json);
		} elseif ($operation == 'update'){
			//echo 'teste: '.html_entity_decode($post);
			//$post = html_entity_decode($post);
			$sql_update = "UPDATE posts SET post = '$post', post_title = '$post_title' WHERE post_id = '$post_id_edit'";
			//echo $sql_update;
			if (mysqli_query($conn, $sql_update)) {
				//echo json_encode(array("statusCode"=>200));
				$arr_json[0] = ["status" => "update"];
				echo json_encode($arr_json);
				//echo $arr_json[0]["status"];
			} 
			else {
				//echo "Error: " . $sql . "<br>" . mysqli_error($conn);
			}
			//echo 'passei pelo update '.$post_id_edit;
			//var_dump($arr_json);
			//echo 'Status: '.$arr_json[0]['status'];
		}
		
		mysqli_close($conn);
	
}


?>




