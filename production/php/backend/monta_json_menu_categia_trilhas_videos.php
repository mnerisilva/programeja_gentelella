<?php

include('connect.php');

		//var_dump($_POST);
		//die();exit;

		$user_logado = $_POST['user_logado'];

		
		/*$sql = "SELECT categoria.id_categoria, categoria.abrev_categoria, trilha.trilha_id, trilha.trilha_name, trilha.id_categoria, trilha_videos.id_conteudo, conteudo.id_conteudo, conteudo.conteudo_descricao, conteudo.conteudo_codigoyoutube FROM categoria, trilha, trilha_videos, conteudo WHERE categoria.id_categoria = trilha.id_categoria AND trilha.trilha_id = trilha_videos.trilha_id AND trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY categoria.abrev_categoria, trilha.trilha_name, conteudo.conteudo_descricao";*/

		/*$sql = "SELECT id_conteudo, conteudo_descricao, conteudo_codigoyoutube, trilha_videos_id FROM (SELECT trilha.trilha_id, conteudo.id_conteudo, conteudo.conteudo_descricao, conteudo.conteudo_codigoyoutube, trilha_videos.trilha_videos_id FROM trilha, trilha_videos, conteudo WHERE trilha.trilha_id = trilha_videos.trilha_id AND trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY trilha.trilha_id, conteudo.conteudo_descricao) x WHERE trilha_id = '$trilha_escolhida' ORDER BY conteudo_descricao";*/

		$sql = "SELECT ut.user_id, cat.id_categoria, cat.abrev_categoria, t.trilha_id, t.trilha_name, c.id_conteudo, c.conteudo_descricao, c.conteudo_codigoyoutube FROM user_trilha ut INNER JOIN trilha t ON ut.trilha_id = t.trilha_id and ut.user_id = '$user_logado' INNER JOIN trilha_videos tv ON ut.trilha_id = tv.trilha_id INNER JOIN conteudo c ON c.id_conteudo = tv.id_conteudo INNER JOIN categoria cat ON cat.id_categoria = t.id_categoria ORDER BY cat.abrev_categoria, t.trilha_name, c.conteudo_descricao";

		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['id_categoria' => $row["id_categoria"], 'abrev_categoria' => $row["abrev_categoria"],'trilha_id' => $row["trilha_id"],'trilha_name' => $row["trilha_name"],'id_conteudo' => $row["id_conteudo"],'conteudo_descricao' => $row["conteudo_descricao"],'conteudo_codigoyoutube' => $row["conteudo_codigoyoutube"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




