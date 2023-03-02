-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 02-Mar-2023 às 04:51
-- Versão do servidor: 10.1.40-MariaDB
-- versão do PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `programeja`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `descricao_categoria` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `abrev_categoria` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `icon_categoria` varchar(255) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `descricao_categoria`, `abrev_categoria`, `icon_categoria`) VALUES
(1, 'css', 'css', '<i class=\"fa-brands fa-css3-alt\" title=\"Css\"></i>'),
(2, 'html', 'html', '<i class=\"fa-brands fa-html5\" title=\"Html\"></i>'),
(3, 'javascritpt', 'js', '<i class=\"fa-brands fa-js\" title=\"Javascript\"></i>'),
(4, 'sem categoria', 'sem categoria', '<i class=\"fa-solid fa-genderless\" title=\"Sem categoria\"></i>'),
(6, 'lógica de programação', 'lógica', '<i class=\"fa-solid fa-boxes-stacked\" title=\"Lógica\"></i>'),
(7, 'metting', 'metting', '<i class=\"fa-solid fa-boxes-stacked\" title=\"Lógica\"></i>'),
(8, 'wordpress', 'wordpress', '<i class=\"fa-brands fa-css3-alt\" title=\"Css\"></i>');

-- --------------------------------------------------------

--
-- Estrutura da tabela `conteudo`
--

CREATE TABLE `conteudo` (
  `id_conteudo` int(11) NOT NULL,
  `id_conteudo_indice` int(11) NOT NULL,
  `conteudo_descricao` text COLLATE latin1_general_ci NOT NULL,
  `conteudo_codigoyoutube` varchar(30) COLLATE latin1_general_ci NOT NULL,
  `id_conteudotipo` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `conteudo`
--

INSERT INTO `conteudo` (`id_conteudo`, `id_conteudo_indice`, `conteudo_descricao`, `conteudo_codigoyoutube`, `id_conteudotipo`, `id_categoria`) VALUES
(165, 165, 'HTML o ESSENCIAL pra programação Front-end', 'qHHXjEmOJyk', 2, 2),
(166, 166, 'Estrutura básica de um Documento HTML', 'hMAvQtQ97eE', 2, 2),
(167, 167, 'COMO ENTENDER A ESTRUTURA DE ELEMENTOS DE UMA PÁGINA HTML', 'oZvuH9_IvwI', 2, 2),
(168, 168, 'Aprenda HTML semântico em 30 minutos', 'tAFRHcEH-Pc', 2, 2),
(169, 169, 'Fundamentos das CSS', 'o6CU2tyKS_c', 2, 1),
(170, 170, 'Fundamentos de CSS', 'gni0SzBpZQQ', 2, 1),
(171, 171, 'O QUE É CSS? (SELETORES, PROPRIEDADES E VALORES)', 'LWU2OR19ZG4', 2, 1),
(172, 172, 'CSS3: Aprenda como Funciona a Estrutura CSS', 'qdTDp7Wr0DU', 2, 1),
(173, 173, 'TUTORIAL WordPress Para Iniciantes 2023', 'CxJJWWb2QaY', 2, 8),
(174, 174, 'WordPress para Iniciantes 2023 - Passo a Passo de Todas Funções do WordPress', '1EqAYuvOeT0', 2, 8),
(175, 175, 'WordPress Tutorial 2023 (COMO COMEÇAR DO ZERO)', 'tu06JoRPyQI', 2, 8),
(176, 176, 'WordPress Tutorial Completo Para Iniciantes 2023', 'l_ZCqM3FQNo', 2, 8);

-- --------------------------------------------------------

--
-- Estrutura da tabela `conteudo_indice`
--

CREATE TABLE `conteudo_indice` (
  `id_conteudo_indice` int(11) NOT NULL,
  `id_conteudotipo` int(11) NOT NULL,
  `conteudo_titulo` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_subcategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `conteudo_indice`
--

INSERT INTO `conteudo_indice` (`id_conteudo_indice`, `id_conteudotipo`, `conteudo_titulo`, `id_categoria`, `id_subcategoria`) VALUES
(165, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(166, 2, 'Estrutura básica de um Documento HTML', 2, 0),
(167, 2, 'COMO ENTENDER A ESTRUTURA DE ELEMENTOS DE UMA PÁGINA HTML', 2, 0),
(168, 2, 'Aprenda HTML semântico em 30 minutos', 2, 0),
(169, 2, 'Fundamentos das CSS', 1, 0),
(170, 2, 'Fundamentos de CSS', 1, 0),
(171, 2, 'O QUE É CSS? (SELETORES, PROPRIEDADES E VALORES)', 1, 0),
(172, 2, 'CSS3: Aprenda como Funciona a Estrutura CSS', 1, 0),
(173, 2, 'TUTORIAL WordPress Para Iniciantes 2023', 8, 0),
(174, 2, 'WordPress para Iniciantes 2023 - Passo a Passo de Todas Funções do WordPress', 8, 0),
(175, 2, 'WordPress Tutorial 2023 (COMO COMEÇAR DO ZERO)', 8, 0),
(176, 2, 'WordPress Tutorial Completo Para Iniciantes 2023', 8, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `conteudo_tipo`
--

CREATE TABLE `conteudo_tipo` (
  `id_conteudotipo` int(11) NOT NULL,
  `descricao_tipo` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `icone_tipo` varchar(200) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `conteudo_tipo`
--

INSERT INTO `conteudo_tipo` (`id_conteudotipo`, `descricao_tipo`, `icone_tipo`) VALUES
(1, 'link', '<i class=\"fa-solid fa-link\"></i>'),
(2, 'video', '<i class=\"fa-brands fa-youtube\"></i>'),
(3, 'playlist', '<i class=\"fa-solid fa-list\"></i>'),
(4, 'snippet', '<i class=\"fa-solid fa-code\"></i>');

-- --------------------------------------------------------

--
-- Estrutura da tabela `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `id_conteudo` int(11) NOT NULL,
  `trilha_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_title` text COLLATE utf8mb4_swedish_ci NOT NULL,
  `post` longtext COLLATE utf8mb4_swedish_ci NOT NULL,
  `post_datepublish` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `post_dateupdate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_swedish_ci;

--
-- Extraindo dados da tabela `posts`
--

INSERT INTO `posts` (`post_id`, `id_conteudo`, `trilha_id`, `user_id`, `post_title`, `post`, `post_datepublish`, `post_dateupdate`) VALUES
(248, 173, 56, 29, 'Post user 29', '<p>Post user 29</p>', '2023-03-02 01:27:28', '2023-03-02 01:27:28'),
(249, 173, 56, 31, 'Post user id 31', '<p>Post user id 31</p>', '2023-03-02 01:28:16', '2023-03-02 01:28:16');

-- --------------------------------------------------------

--
-- Estrutura da tabela `subcategoria`
--

CREATE TABLE `subcategoria` (
  `id_subcategoria` int(11) NOT NULL,
  `descricao_subcategoria` varchar(50) NOT NULL,
  `abrev_subcategoria` varchar(50) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `trilha`
--

CREATE TABLE `trilha` (
  `trilha_id` int(11) NOT NULL,
  `trilha_name` varchar(250) NOT NULL,
  `trilha_type_id` int(11) NOT NULL,
  `trilha_descricao` text NOT NULL,
  `trilha_nomeamigavel` varchar(50) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `trilha_status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `trilha`
--

INSERT INTO `trilha` (`trilha_id`, `trilha_name`, `trilha_type_id`, `trilha_descricao`, `trilha_nomeamigavel`, `id_categoria`, `trilha_status_id`) VALUES
(54, 'Html básico', 1, ' ', 'Html básico', 2, 1),
(55, 'Css Básico', 1, ' ', 'Css Básico', 1, 1),
(56, 'WordPress básico', 1, ' ', 'WordPress Básico', 8, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `trilha_status`
--

CREATE TABLE `trilha_status` (
  `trilha_status_id` int(11) NOT NULL,
  `trilha_status_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `trilha_status`
--

INSERT INTO `trilha_status` (`trilha_status_id`, `trilha_status_name`) VALUES
(1, 'on'),
(2, 'off');

-- --------------------------------------------------------

--
-- Estrutura da tabela `trilha_tipo`
--

CREATE TABLE `trilha_tipo` (
  `trilha_type_id` int(11) NOT NULL,
  `trilha_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `trilha_tipo`
--

INSERT INTO `trilha_tipo` (`trilha_type_id`, `trilha_type_name`) VALUES
(1, 'geral'),
(2, 'provisória');

-- --------------------------------------------------------

--
-- Estrutura da tabela `trilha_videos`
--

CREATE TABLE `trilha_videos` (
  `trilha_videos_id` int(11) NOT NULL,
  `trilha_id` int(11) NOT NULL,
  `id_conteudo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `trilha_videos`
--

INSERT INTO `trilha_videos` (`trilha_videos_id`, `trilha_id`, `id_conteudo`) VALUES
(97, 55, 172),
(98, 55, 169),
(99, 55, 170),
(100, 55, 171),
(101, 54, 168),
(102, 54, 167),
(103, 54, 166),
(104, 54, 165),
(105, 56, 173),
(106, 56, 174),
(107, 56, 175),
(108, 56, 176);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_sexo` varchar(1) NOT NULL,
  `user_access_type` int(3) NOT NULL,
  `user_whatsapp` varchar(50) NOT NULL,
  `user_logradouro` varchar(200) NOT NULL,
  `user_numero` varchar(15) NOT NULL,
  `user_complemento` varchar(100) NOT NULL,
  `user_cep` varchar(8) NOT NULL,
  `user_bairro` varchar(100) NOT NULL,
  `user_cidade` varchar(100) NOT NULL,
  `user_uf` varchar(2) NOT NULL,
  `user_cpf` varchar(11) NOT NULL,
  `user_idade` varchar(15) NOT NULL,
  `user_login` varchar(30) NOT NULL,
  `user_password` varchar(250) NOT NULL,
  `user_pix` varchar(100) NOT NULL,
  `user_photo` varchar(400) NOT NULL,
  `user_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_sexo`, `user_access_type`, `user_whatsapp`, `user_logradouro`, `user_numero`, `user_complemento`, `user_cep`, `user_bairro`, `user_cidade`, `user_uf`, `user_cpf`, `user_idade`, `user_login`, `user_password`, `user_pix`, `user_photo`, `user_date`) VALUES
(1, 'Marcio Henrique da Silva', 'marciosilva@xpto.com', '1', 2, '', '', '', '', '', '', '', '', '', '', '', '123456', '', 'https://userstock.io/data/wp-content/uploads/2020/05/imansyah-muhamad-putera-n4KewLKFOZw-1024x1024.jpg', ''),
(2, 'Giberto Pereira Santos', 'gilbertosantos@xpto.com', '1', 2, '', '', '', '', '88085888', '', '', '', '', '', '', '123456', '', 'https://userstock.io/data/wp-content/uploads/2020/06/tyler-nix-PQeoQdkU9jQ-1024x1024.jpg', ''),
(3, 'Sandra Mara Garcia', 'sandragarcia@xpto.com', '2', 2, '', '', '', '', '', '', '', '', '', '', '', '123456', '', 'https://userstock.io/data/wp-content/uploads/2017/09/janko-ferlic-289675-1024x1021.jpg', ''),
(13, 'Julia Cristina Carvalho', 'juliacristinaxpto@xpto.com', '2', 2, '44949499499', 'rua das acácias', '12', 'fundos', '88888888', 'Centro', 'Florianópolis', 'SC', '55555555555', '30', '', '123456', 'julia@sdfdsfdsa', 'https://userstock.io/data/wp-content/uploads/2017/09/michael-dam-258165-300x300.jpg', ''),
(28, 'Mauro Gonçalves Oliveira', 'mauro@xpto.com', '1', 2, '48988026426', 'Rua das Casas', '15', '', '88085260', 'Centro', 'Florianópolis', 'SC', '55853676920', '26', 'mauro@xpto.com', '123456', 'mauro@dfsfsdf', '../../images/users/avatar.png', ''),
(29, 'Adriele Santos', 'nana@xpto.com', '2', 2, '48488999999', 'Rua das Casas', '15', 'funcods', '88888888', 'Centro', 'São José', 'SC', '99999999999', '30', 'nana@xpto.com', '123456', 'nana@dfddfsd', 'https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg', ''),
(30, 'Marcelo Neri da Silva', 'marceloneri@gmail.com', 'A', 1, 'sdsdsa', 'asdsa', 'asdsad', 'ASDS', '88085260', 'ASDSAD', 'Florianópolis', 'as', 'asdsad', 'ASDSA', 'marceloneri@gmail.com', '123456', 'asdsa', '../../images/users/avatar.png', ''),
(31, 'Marcelo Neri da Silva', 'marceloneri2@gmail.com', 'A', 2, 'sdsdsa', 'asdsa', 'asdsad', 'ASDS', '88085260', 'ASDSAD', 'Florianópolis', 'as', 'asdsad', 'ASDSA', 'marceloneri2@gmail.com', '123456', 'asdsa', '../../images/users/avatar.png', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_trilha`
--

CREATE TABLE `user_trilha` (
  `usertrilha_id` int(11) NOT NULL,
  `trilha_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `user_trilha`
--

INSERT INTO `user_trilha` (`usertrilha_id`, `trilha_id`, `user_id`) VALUES
(11, 56, 31),
(12, 56, 29);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `senha` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indexes for table `conteudo`
--
ALTER TABLE `conteudo`
  ADD PRIMARY KEY (`id_conteudo`);

--
-- Indexes for table `conteudo_indice`
--
ALTER TABLE `conteudo_indice`
  ADD PRIMARY KEY (`id_conteudo_indice`);

--
-- Indexes for table `conteudo_tipo`
--
ALTER TABLE `conteudo_tipo`
  ADD PRIMARY KEY (`id_conteudotipo`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD PRIMARY KEY (`id_subcategoria`);

--
-- Indexes for table `trilha`
--
ALTER TABLE `trilha`
  ADD PRIMARY KEY (`trilha_id`);

--
-- Indexes for table `trilha_status`
--
ALTER TABLE `trilha_status`
  ADD PRIMARY KEY (`trilha_status_id`);

--
-- Indexes for table `trilha_tipo`
--
ALTER TABLE `trilha_tipo`
  ADD PRIMARY KEY (`trilha_type_id`);

--
-- Indexes for table `trilha_videos`
--
ALTER TABLE `trilha_videos`
  ADD PRIMARY KEY (`trilha_videos_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_trilha`
--
ALTER TABLE `user_trilha`
  ADD PRIMARY KEY (`usertrilha_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `conteudo`
--
ALTER TABLE `conteudo`
  MODIFY `id_conteudo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT for table `conteudo_indice`
--
ALTER TABLE `conteudo_indice`
  MODIFY `id_conteudo_indice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT for table `conteudo_tipo`
--
ALTER TABLE `conteudo_tipo`
  MODIFY `id_conteudotipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT for table `subcategoria`
--
ALTER TABLE `subcategoria`
  MODIFY `id_subcategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trilha`
--
ALTER TABLE `trilha`
  MODIFY `trilha_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `trilha_status`
--
ALTER TABLE `trilha_status`
  MODIFY `trilha_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trilha_tipo`
--
ALTER TABLE `trilha_tipo`
  MODIFY `trilha_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trilha_videos`
--
ALTER TABLE `trilha_videos`
  MODIFY `trilha_videos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `user_trilha`
--
ALTER TABLE `user_trilha`
  MODIFY `usertrilha_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
