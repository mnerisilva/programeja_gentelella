<?php

include('connect.php');


			
mysqli_set_charset($conn, "utf8");



		$operation			= addslashes($_POST['operation']);
		$post_id_edit		= addslashes($_POST['post_id_edit']);
        $id_conteudo		= intval($_POST['id_conteudo']);
        $trilha_id			= intval($_POST['trilha_id']);
        $user_id			= intval($_POST['user_id']);
        $post_title			= addslashes($_POST['post_title']);
        $post				= addslashes($_POST['post']);


			$arr_json = [];
			$contador = 0;

		if ($operation == 'save'){
			$sql_save = "INSERT INTO `posts`(`id_conteudo`, `trilha_id`, `user_id`, `post_title`, `post`, `post_datepublish`, `post_dateupdate`) VALUES ('$id_conteudo', '$trilha_id', '$user_id', '$post_title', '$post', NOW(), NOW())";

			if (mysqli_query($conn, $sql_save)) {
				$arr_json[0] = ["status" => "save"];
				echo json_encode($arr_json);
			} 
			else {
			}
			$ui = mysqli_insert_id($conn);
		} elseif ($operation == 'update'){
			$sql_update = "UPDATE posts SET post = '$post', post_title = '$post_title' WHERE post_id = '$post_id_edit' LIMIT 1";
			if (mysqli_query($conn, $sql_update)) {
				$arr_json[0] = ["status" => "update"];
				echo json_encode($arr_json);
			} 
		}
		
		mysqli_close($conn);
	



?>




