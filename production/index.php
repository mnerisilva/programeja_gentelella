<?php
// Conexão
require_once 'php/backend/connect.php';

// Sessão
session_start();

// Botão enviar
if(isset($_POST['btn-entrar'])){

	$erros = array();
	$user_login = mysqli_escape_string($conn, $_POST['user_login']);
	$user_password = mysqli_escape_string($conn, $_POST['user_password']);

	if(isset($_POST['lembrar-senha'])):

		setcookie('login', $user_login, time()+3600);
		//setcookie('senha', md5($user_password), time()+3600);
		setcookie('senha', $user_password, time()+3600);
	endif;

	if(empty($user_login) or empty($user_password)):
		$erros[] = "<li> O campo login/senha precisa ser preenchido </li>";
	else:
		// 105 OR 1=1 
	    // 1; DROP TABLE teste

		$sql = "SELECT user_login FROM user WHERE user_login = '$user_login'";
		$resultado = mysqli_query($conn, $sql);		

		if(mysqli_num_rows($resultado) > 0):
		//$user_password = md5($user_password);  
		$user_password = $user_password;  
		$sql = "SELECT * FROM user WHERE user_login = '$user_login' AND user_password = '$user_password'";



		$resultado = mysqli_query($conn, $sql);

			if(mysqli_num_rows($resultado) == 1){
				$dados = mysqli_fetch_array($resultado);
				mysqli_close($conn);
				$_SESSION['logado'] = true;
				$_SESSION['id_usuario'] = $dados['user_id'];
				$_SESSION['user_access_type'] = $dados['user_access_type'];
				$_SESSION['user_name'] = $dados['user_name'];
				$_SESSION['user_photo'] = $dados['user_photo'];
				$_SESSION['user_sexo'] = $dados['user_sexo'];
				$_SESSION['saudacao'] = 'Bem-vindo,';
          if($dados['user_sexo'] == 2){
            $_SESSION['saudacao'] = 'Bem-vinda,';
          }
        if($_SESSION['user_access_type'] == 1){
				  header('Location: php/dashboard/dashboard_admin.php');
        }elseif($_SESSION['user_access_type'] == 2){
				  header('Location: php/plataforma/plataforma.php');
        }
      } else {
				$erros[] = "<li> Usuário e senha não conferem </li>";
      }

		else:
			$erros[] = "<li> Usuário inexistente </li>";
		endif;

	endif;

//endif;
}/* elseif(isset($_POST['btn-cadastrar'])){    
    header('Location: php/registro.php');
}*/
?>

<!--<html>
<head>
  <link href="images/favicon.ico" rel="shortcut icon" />
	<title> GEsTri</title>
	<meta charset="utf-8">
</head>
<body>-->

<?php 
//if(!empty($erros)):
//	foreach($erros as $erro):
///		echo $erro;
///	endforeach;
//endif;
?>





<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="login/fonts/icomoon/style.css">

    <link rel="stylesheet" href="login/css/owl.carousel.min.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="login/css/bootstrap.min.css">
    
    <!-- Style -->
    <link rel="stylesheet" href="login/css/style.css">
    <link href="css/index.css" rel="stylesheet">

    <title>|| Gestão de trilhas de estudo</title><link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link href="images/favicon.ico" rel="shortcut icon" />
  </head>
  <body>
  

  <header>
    <div class="header">
      <ul>
        <li>
          <div class="logo">
            <span><img src="images/favicon.jpg" alt=""></span>
            <span> GE</span><span style="color: purple; font-weight: 600;">sTri</span> - Gestão de Trilhas de Estudo
          </div>
        </li>
      </ul>
    </div>
  </header>
  <div class="content">
                  <div class="spin-registrese esconde-spin-registrese">               
                    <img src="images/spin.gif" alt="">
                    <h3>aguarde...</h3>
                  </div>    
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="login/images/undraw_remotely_2j6y.svg" alt="Image" class="img-fluid">
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
              <h3>Gestão de trilhas de estudo</h3>

              <?php 
              if(!empty($erros)):
                foreach($erros as $erro):
                  echo $erro;
                endforeach;
              endif;
              ?>              
              <p class="mb-4">Não se perca no caminho. Siga sua trilha de conhecimento.</p>
            </div>
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
              <div class="form-group first">
                <label for="username">Username</label>
                <!--<input type="text" class="form-control" id="username" name="login" value="<?php //echo isset($_COOKIE['login']) ? $_COOKIE['login'] : '' ?>">-->
                <input type="text" class="form-control" id="username" name="user_login" value="nana@xpto.com">

              </div>
              <div class="form-group last mb-4">
                <label for="password">Password</label>
                <!--<input type="password" class="form-control" id="password" name="senha" value="<?php //echo isset($_COOKIE['senha']) ? $_COOKIE['senha'] : '' ?>">-->
                <input type="password" class="form-control" id="password" name="user_password" value="123456">                
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Manter conectado</span>
                  <input type="checkbox" checked="checked" name="lembrar-senha"/>
                  <div class="control__indicator"></div>
                </label>
                <span class="ml-auto esqueci-a-senha">Esqueci a Senha</span> 
              </div>

              <input type="submit" value="Entrar" class="btn btn-block btn-primary" name="btn-entrar" style="margin-bottom: 1.3em;">
              <!--<br />-->
              <div style="width: 100%; text-align: center;">
                <span style="text-align: center; color: #888;">Caso ainda não tenha cadastro, clique no botão abaixo. </span> <i class="fa-regular fa-hand-point-up" style="transform: rotate(180deg); color: #483dff;"></i>
              </div>
              <button type="button" id="registre_se_button" class="btn btn-block btn-secondary" style="margin-top: .4em;">Cadastre-se</button>

              <span style="display:none !important;" class="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>
              
              <div class="social-login" style="display:none;">
                <a href="#" class="facebook">
                  <span class="icon-facebook mr-3"></span> 
                </a>
                <a href="#" class="twitter">
                  <span class="icon-twitter mr-3"></span> 
                </a>
                <a href="#" class="google">
                  <span class="icon-google mr-3"></span> 
                </a>
              </div>
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>










<!-- DIV container REGISTRE-SE início -->
<div class="container-fluid container-registre-se">
                  <span class="registre-se-close"><i class="fa-solid fa-xmark"></i></span>
                  <form id="registre_se" class="esconde-registre-se form-registre-se" autocomplete="off">                  
                    <hr/>
                    <h1 class="mb-4" style="text-align: center;">Registro de usuário</h1>
                    <div class="alert-danger alert-user-exist" style="padding: 8px 0 2px 2rem; margin-bottom: 5px !important;">
                      <span>Você já tem cadastro!</span>
                      <i class="fa-regular fa-hand-point-up" style="transform: rotate(180deg);"></i>
                    </div>                    
                        <!-- primeira linha -->
                        <div class="form-group row ">
                          <label class="control-label col-md-1 col-sm-1 ">E-mail</label>
                          <div class="col-md-4 col-sm-4 ">
                            <input type="email" class="form-control" id="reg_email" required="" name="reg_email" placeholder="email" autocomplete="off">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Nome</label>
                          <div class="col-md-3 col-sm-3 ">
                            <input type="text" class="form-control" id="reg_name" required="" name="reg_name" placeholder="" value="" autocomplete="off">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">WhatsApp</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="reg_whatsapp" required="" name="reg_whatsapp" data-inputmask="'mask': '(99)99999-9999'" value="" autocomplete="off">
                          </div>
                        </div>                       
                        <div class="ln_solid"></div>
                        <!-- segunda linha -->
                      <div class="container-logradouro">
                        <div class="form-group row ">
                          <h6>Informações de endereço</h6>
                        </div>
                        <div class="form-group row ">
                          <label class="control-label col-md-1 col-sm-1 ">Logradouro</label>
                          <div class="col-md-6 col-sm-6 ">
                            <input type="text" class="form-control" id="reg_logradouro" name="reg_logradouro" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Número</label>
                          <div class="col-md-1 col-sm-1 ">
                            <input type="text" class="form-control" id="reg_numero" name="reg_numero" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Complemento</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="reg_complemento" name="reg_complemento" placeholder="">
                          </div>
                        </div>
                        <!-- terceira linha -->
                        <div class="form-group row ">
                          <label class="control-label col-md-1 col-sm-1 ">Bairro</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="reg_bairro" required="" name="reg_bairro" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Cidade</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="reg_cidade" required="" name="reg_cidade" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">UF</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="reg_uf" required="" name="reg_uf" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Cep</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="reg_cep" required="" name="reg_cep" placeholder="" data-inputmask="'mask': '99999-999'">
                          </div>
                        </div>
                      </div>
                        <!-- quarta linha -->
                        <div class="form-group row mt-4">
                          <label class="control-label col-md-1 col-sm-1 ">Idade</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="reg_idade" required="" name="reg_idade" placeholder="">
                          </div>
                          <!--<label class="control-label col-md-1 col-sm-1 ">Login</label>
                          <div class="col-md-3 col-sm-3 ">
                            <input type="text" class="form-control" id="reg_login" required="" name="reg_login" placeholder="">
                          </div>-->
                          <label class="control-label col-md-1 col-sm-1 ">Chave Pix</label>
                          <div class="col-md-4 col-sm-4 ">
                            <input type="text" class="form-control" id="reg_pix" required="" name="reg_pix" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Sexo</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="reg_sexo" required="" name="reg_sexo" placeholder="">
                          </div>
                        </div>
                        <!-- quinta linha -->
                        <div class="form-group row">
                          <label class="control-label col-md-1 col-sm-1 ">Cpf</label>
                          <div class="col-md-4 col-sm-4 ">
                          <input type="text" class="form-control" id="reg_cpf" required="" name="reg_cpf" data-inputmask="'mask': '999.999.999-99'">
                          </div>
                        </div>
                        <div class="ln_solid"></div>
                        <!--<div class="form-group">-->
                          <!--<div class="col-md-9 col-sm-9">
                            <button type="button" class="btn btn-secondary button-4 cancela-modal-que-serve-ao-cadastro-de-user">Cancela</button>-->
                            <!--<button type="submit" class="btn btn-secondary btn-salvar btn-salvar-categoria submit">Salvar categoria</button>-->
                          <!--</div>-->
                          <div class="col-md-12 col-sm-12">
                            <div class="user-message-saved d-flex justify-content-center align-items-center text-white bg-success">
                              <h4><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Usuário inserido com sucesso!</h4>                              
                            </div>
                          </div>
                        <!--</div>--> 
                        <button type="button" class="btn btn-light button-4 btn-cancelar-registro" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-light button-4 btn-limpar-registro" data-dismiss="modal">Limpar</button>
                        <button type="submit" class="btn btn-info button-4 btn-salvar btn-salvar-registro submit">Salvar</button>
                  </form>         
    </div> <!-- DIV container REGISTRE-SE fim --> 



    <!-- DIV container ESQUECEU-A-SENHA início -->
    <div class="container-fluid container-esqueci-a-senha">
    <span class="esqueci-a-senha-close"><i class="fa-solid fa-xmark"></i></span>
      <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Esqueci a senha</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div> <!-- DIV container ESQUECEU-A-SENHA fim -->















<!-- DIV container REGISTRE-SE COM SUCESSO início -->
<div class="container-fluid container-esqueceu-a-senha">
                  <h2 class="">ESQUECEU A SENHA?</h2>
                  <span class="esqueceu-a-senha-close"><i class="fa-solid fa-xmark"></i></span>
                  <div class="container-mensagem-esqueceu-a-senha">
                    <span>Informe seu e-mail para que possamos reenvia-la:</span>
                    <form id="form_esqueceu_a_senha">
                      <div class="container-button-input">
                        <input class="form-control" id="email-esqueceu-a-senha" type="email" name="email-esqueceu-a-senha">
                        <button type="submit" class="btn-info form-control button-esqueceu-a-senha">Enviar</button>
                      </div>
                      <div class="mail-error">* Email inválido!</div>                    
                    </form>
                    <p>Um email contendo informações de acesso à nossa plataforma acabou de ser enviado para a sua caixa de entrada. Por favor, verifique a mensagem e siga as instruções para concluir o processo. Agradecemos sua escolha e esperamos que você aproveite todos os recursos e benefícios oferecidos pela plataforma.</p>                    
                  </div>       
</div> <!-- DIV container REGISTRE-SE COM SUCESSO fim -->



















<!-- DIV container REGISTRE-SE COM SUCESSO início -->
<div class="container-fluid container-registrouse-com-sucesso">
                  <div class=""></div>
                  <span class="registrouse-com-sucesso-close"><i class="fa-solid fa-xmark"></i></span>
                  <div class="mensagem-sucesso-no-registro">
                    <h3>Parabéns! Seu registro foi efetuado com sucesso!</h3>
                    <p>Um email contendo informações de acesso à nossa plataforma acabou de ser enviado para a sua caixa de entrada. Por favor, verifique a mensagem e siga as instruções para concluir o processo. Agradecemos sua escolha e esperamos que você aproveite todos os recursos e benefícios oferecidos pela plataforma.</p>                    
                  </div>       
</div> <!-- DIV container REGISTRE-SE COM SUCESSO fim -->
    



  </div>

  
    <script src="login/js/jquery-3.3.1.min.js"></script>
    <script src="login/js/popper.min.js"></script>
    <script src="login/js/bootstrap.min.js"></script>
    <script src="login/js/main.js"></script> 
    <!-- mask input -->
    <script src="vendors/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js"></script>
    <script src="js/index.js"></script>
  </body>



  </html>