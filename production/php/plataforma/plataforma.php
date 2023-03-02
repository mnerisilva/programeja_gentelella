<?php
// Conexão
require_once '../backend/connect.php';

// Sessão
session_start();

// Verificação
if(!isset($_SESSION['logado'])):
	header('Location: ../../index.php');
endif;

// Dados
$user_id = $_SESSION['id_usuario'];
$user_name =  $_SESSION['user_name'];
$user_photo =  $_SESSION['user_photo'];
$saudacao =  $_SESSION['saudacao'];  
$sql = "SELECT * FROM user WHERE user_id = '$user_id'";
$resultado = mysqli_query($conn, $sql);
$dados = mysqli_fetch_array($resultado);
mysqli_close($conn);
?>












<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<!--<link rel="icon" href="images/favicon.ico" type="image/ico" />-->
	<link rel="icon" href="../../images/logo_amarelo.svg" type="image/ico" />

    <title>GEsTri - Gestão de Trilhas de Estudos</title>

    <!-- Bootstrap -->
    <link href="../../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- NProgress -->
    <link href="../../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="../../vendors/iCheck/skins/flat/green.css" rel="stylesheet">
	
    <!-- bootstrap-progressbar -->
    <link href="../../vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">
    <!-- JQVMap -->
    <link href="../../vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet"/>
    <!-- bootstrap-daterangepicker -->
    <link href="../../vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">  
    
    <script src="../../js/prism/prism.js"></script>

    <link href="../../css/prism/prism.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="../../build/css/custom.min.css" rel="stylesheet">

    <link href="../../css/general_style.css" rel="stylesheet">

    <!-- TinyMCE -->    
    <script src="../../tinymce/tinymce.min.js"></script>
    
  </head>

  <body class="nav-md line-numbers">

    <div class="mascara"></div>

    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.html" class="site_title"><img src="../../images/logo_branco.svg" alt=""> <span>GEsTri</span></a>
            </div>

            <div class="clearfix"></div>








            
            <!--<div class="profile clearfix">
              <div class="profile_pic">
                <img src="../../images/users/women-s-white-and-black-button-up-collared-shirt-774909-300x300.jpg" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Bem-vindo(a),</span>
                <h2>Adriele Santos</h2><p id="id-user-logado" class="id-usuario-logado">29</p>
              </div>
            </div>-->


            <!-- menu profile quick info -->
            <div class="profile clearfix esconde_profile">
              <div class="profile_pic">
                <!--<img src="../../images/img.jpg" alt="..." class="img-circle profile_img">-->
                <img src="<?php echo $dados['user_photo']; ?>" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <div>
                  <span><?php echo $saudacao; ?></span>
                  <h2><?php echo $dados['user_name']; ?></h2>
                  <span id="id-user-logado" class="id-usuario-logado" style="display: none !important;"><?php echo $dados['user_id']; ?></span>
                </div>
                <div></div>
              </div>
            </div>
            <!-- /menu profile quick info -->            











            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <ul class="nav side-menu">
                </ul>
              </div>

            </div>
            <!-- /sidebar menu -->






















            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->







          </div>
        </div>







        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>
              <nav class="nav navbar-nav">
              <ul class=" navbar-right">
                <li class="nav-item nav-item-config"><i class="fa-solid fa-gear tool-button"></i></li>
                <li class="nav-item dropdown open" style="padding-left: 15px;">
                  <a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                      <img src="<?php echo $dados['user_photo']; ?>" alt=""><?php echo $dados['user_name']; ?> <span class="span-plataforma-user-id" style="opacity: 0;"><?php echo $user_id; ?></span>
                  </a>
                  <div class="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                    <!--<a class="dropdown-item"  href="javascript:;"> Profile</a>-->
                      <!--<a class="dropdown-item"  href="javascript:;">
                        <span class="badge bg-red pull-right">50%</span>
                        <span>Settings</span>
                      </a>-->
                  <!--<a class="dropdown-item"  href="javascript:;">Help</a>-->
                    <a class="dropdown-item"  href="../logout/logout.php"><i class="fa fa-sign-out pull-right"></i> Sair</a>
                  </div>
                </li>

                <li role="presentation" class="nav-item dropdown open">
                  <a href="javascript:;" class="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul class="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="../../images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="../../images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="../../images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="../../images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <div class="text-center">
                        <a class="dropdown-item">
                          <strong>See All Alerts</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->







        <!-- page content -->
        <div class="right_col" role="main">
          <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="row duas-colunas">
                  <div class="col-lg-5 col-md-4 esquerda">
                    <div class="mask-left-col"></div>
                    <div class="col-lg-12 col-md-12 video-content">  
                    <div class="x_panel tile fixed_height_320">
                      <div class="x_title">                        
                        <h2><i class="fa-solid fa-video"></i> Vídeo do contexto</h2>
                        <ul class="nav navbar-right panel_toolbox">
                          <li>
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                          </li>
                        </ul>
                        <div class="clearfix"></div>
                      </div>
                      <div class="x_content" style="display: block;">
                        <div class="embed-responsive embed-responsive-16by9 embed-video-youtube mb-4">
                          <iframe id="video-abertura" src="https://www.youtube.com/embed/mHW1Hsqlp6A?enablejsapi=1&amp;version=3&amp;rel=0&amp;amp;autoplay=1&amp;amp;start=0" class="embed-responsive-item" allowfullscreen="" autoplay="1"></iframe>
                        </div> 
                      </div>
                    </div>
























                     
                    </div>
                    <div class="col-lg-12 col-md-12 editor container-editor">
                        <i class="fa-solid fa-circle-plus add-new-post remove"></i>
                          <form id="form-salva-post">
                            <div class="form-group">
                              <label class="control-label"><i class="fa fa-arrow-down"></i> Título do trecho de código</label>
                              <!--<input type="text" class="form-control" id="post_title" required="" name="post_title"  placeholder="Título do post...">-->
                              <input type="text" class="form-control" id="post_title" name="post_title" required  placeholder="Título do post...">
                              <input type="hidden" class="form-control" id="operation" required="" name="operation" value="save">
                              <input type="hidden" class="form-control" id="post_id_edit" required="" name="post_id_edit" value="">
                            </div>
                            <textarea id="editor1" name="editor1"></textarea>
                            <button type="submit" class="btn btn-secondary salva-texto-do-editor mt-2">Salvar</button>
                            <button type="button" class="btn btn-outline-dark salva-post-cancelar mt-2">Cancelar</button>
                            <button type="button" class="btn btn-outline-dark salva-post-descartar mt-2">Descartar</button>
                          </form>                 
                    </div>
                  </div>
                  <div class="col-lg-7 col-md-8 direita">
                    <section class="post-tools-bar">
                      <ul>
                        <li><span><i class="fa-solid fa-gear tool-button"></i></span></li>
                        <li><span><i class="fa-solid fa-screwdriver-wrench tool-button"></i></span></li>
                        <li><span><i class="fa-solid fa-wrench tool-button"></i></span></li>
                        <li><span><i class="fa-solid fa-magnifying-glass tool-button"></i></span></li>
                        <li><span><i class="fa-solid fa-bars tool-button"></i></span></li>
                      </ul>
                      <div class="col-md-5 col-sm-5   form-group pull-right top_search">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Procure por...">
                        <span class="input-group-btn">
                          <button class="btn btn-warning" type="button">Ok!</button>
                        </span>
                        </div>
                      </div>
                    </section>
                    <div class="lista-de-posts">
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!-- /page content -->









        <!-- footer content -->
        <footer>
          <div class="pull-right">
            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->










      </div>
    </div>


































<div class="container-clone">
    <li class="li-a-clonar"><a style="display: flex; align-items: baseline; justify-content: space-between;"><span style="display: flex; align-items: baseline;"><i class="fa-solid fa-diagram-project"></i> <span class="span-nome-trilha"> Css </span></span> <span class="fa fa-chevron-down"></span></a> 
      <ul class="nav child_menu">
      </ul>
    </li>
  </div>

  <div class="h3-a-clonar">
    <h3></h3>
  </div>

  <div class="item-a-clonar">    
    <li><a href=""></a></li>
  </div>





  <!--<div class="container-clone">
    <li class="li-a-clonar"><a><i class="fa-solid fa-list"></i></i>Css <span class="fa fa-chevron-down"></span></a>
      <ul class="nav child_menu">
        <li><a href="form.html">Css básico</a></li>
        <li><a href="form_advanced.html">Css Elementar</a></li>
        <li><a href="form_validation.html">Fundamentos Css</a></li>
        <li><a href="form_wizards.html">Css em 10 minutos</a></li>
        <li><a href="form_upload.html">Css divertido</a></li>
        <li><a href="form_buttons.html">Css dicas</a></li>
      </ul>
    </li>
  </div>-->






      <!-- popup confirma exclusao post -->
      <div class="confirma-exclusao-post">
        Confirma exclusão: 
        <form id="form-confirma-exclusao-post-sim">
            <input type="hidden" name="post_id" value="" />
            <button type="submit" class="btn btn-success btn-sim-exclui-post">
                Sim
            </button> 
        </form>            

        <form id="form-confirma-exclusao-post-nao">
            <input type="hidden" name="post_id" value="" />
            <button type="submit" class="btn btn-secondary btn-nao-exclui-post">
                Não
            </button> 
        </form>
      </div> 









    

    <!-- jQuery -->
    <script src="../../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="../../vendors/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <!-- FastClick -->
    <script src="../../vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="../../vendors/nprogress/nprogress.js"></script>
    <!-- Chart.js -->
    <script src="../../vendors/Chart.js/dist/Chart.min.js"></script>
    <!-- gauge.js -->
    <script src="../../vendors/gauge.js/dist/gauge.min.js"></script>
    <!-- bootstrap-progressbar -->
    <script src="../../vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
    <!-- iCheck -->
    <script src="../../vendors/iCheck/icheck.min.js"></script>
    <!-- Skycons -->
    <script src="../../vendors/skycons/skycons.js"></script>
    <!-- Flot -->
    <script src="../../vendors/Flot/jquery.flot.js"></script>
    <script src="../../vendors/Flot/jquery.flot.pie.js"></script>
    <script src="../../vendors/Flot/jquery.flot.time.js"></script>
    <script src="../../vendors/Flot/jquery.flot.stack.js"></script>
    <!--<script src="vendors/Flot/jquery.flot.resize.js"></script>-->
    <!-- Flot plugins -->
    <script src="../../vendors/flot.orderbars/js/jquery.flot.orderBars.js"></script>
    <script src="../../vendors/flot-spline/js/jquery.flot.spline.min.js"></script>
    <script src="../../vendors/flot.curvedlines/curvedLines.js"></script>
    <!-- DateJS -->
    <script src="../../vendors/DateJS/build/date.js"></script>
    <!-- JQVMap -->
    <script src="../../vendors/jqvmap/dist/jquery.vmap.js"></script>
    <script src="../../vendors/jqvmap/dist/maps/jquery.vmap.world.js"></script>
    <script src="../../vendors/jqvmap/examples/js/jquery.vmap.sampledata.js"></script>
    <!-- bootstrap-daterangepicker -->
    <script src="../../vendors/moment/min/moment.min.js"></script>
    <script src="../../vendors/bootstrap-daterangepicker/daterangepicker.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="../../build/js/custom.min.js"></script>

    <script src="../../js/general_script.js"></script>
	
  </body>
</html>
