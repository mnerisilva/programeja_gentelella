    const _formSalvaPost = document.querySelector('#form-salva-post');
    _formSalvaPost.classList.add('remove');

    const _listaDePosts = document.querySelector('.lista-de-posts');
    _listaDePosts.innerHTML = '';
    
     const _addNewPost = document.querySelector('.add-new-post');

     _addNewPost.addEventListener('click', function(e){
        _formSalvaPost.classList.remove('remove');
        e.target.classList.add('remove');
     });

     let str = '';
    


    const _menuToggle = document.querySelector('#menu_toggle');
    const _body = document.querySelector('body');
    _menuToggle.addEventListener('click', function(){
            _body.classList.toggle('nav-md');
            _body.classList.toggle('nav-sm');
    });
    const obje = [];
    let _idConteudoEscolhidoUserLogado = '';
    let _trilhaIdEscolhidaUserLogado = '';
    let _userIdUserLogado = ''; 
    let _snippetPostTitleRightHome = '';
    let _idConteudo = '';
    
    const _divListaDePosts = document.querySelector('.lista-de-posts');
    

    const _post = document.querySelector('.lista-de-posts');

    
    let _postEditContext = '';
    let _postEditContextTitle = '';
    let _postEditContextContent = '';
    let _operation = '';

    let _userIdDoUsuario = '29';

        tinymceCarregamento();
        carregaVideo('mHW1Hsqlp6A', 'Por que todos deveriam aprender a programar?');
        //montaMenuTrilhaVideosDinamicamente();


    const elemento = document.createElement('h3');
    let contador = 0;
    let arr = [];
    let taglink = null;
    let child_menu = null;

    let localInserirH3 = document.querySelector('.menu_section'); // container H3
    let localInserir = document.querySelector('.side-menu'); // container do child_menu
    let localInserirItem = document.querySelector('.child_menu'); // container dos itens de menu

    let H3 = document.querySelector('.h3-a-clonar h3');
    let LI_trilha = document.querySelector('.container-clone .li-a-clonar');
    let LI_Item = document.querySelector('.item-a-clonar li');

    localInserir.style.opacity = 0;


    const _btnSalvaTextoDoEditor = document.querySelector('.salva-texto-do-editor');
    const _btnSalvaPostCancelar = document.querySelector('.salva-post-cancelar');


    //_btnSalvaTextoDoEditor.addEventListener('click', function(){
        $(_formSalvaPost).submit(function(event){
            event.preventDefault();           
            Prism.highlightAll();
            //let _conteudoTextareaEditor = CKEDITOR.instances.editor1.getData();
            console.log('MMMMMMM '+tinymce.activeEditor);
            let _conteudoTextareaEditor = tinymce.get("editor1").getContent();
            let _postTitle = document.querySelector('#post_title').value; 
            let _operation = _formSalvaPost.querySelector('#operation');    // captura a natureza da operação: 'save': INCLUI novo post, ou, 'update': ATUALIZA de post existente
            _operation = _operation.value;
            if(_conteudoTextareaEditor == '' || _postTitle.trim() == ''){
                _containerEditor.classList.add('efeito-fade');            
                console.log('algum campo não foi preenchido');
                setTimeout(function(){
                    _containerEditor.classList.remove('efeito-fade');
                }, 100);
                return;
            }
            let _post_id_edit = _formSalvaPost.querySelector('#post_id_edit');    // captura a natureza da operação: 'save': INCLUI novo post, ou, 'update': ATUALIZA de post existente
            _post_id_edit = _post_id_edit.value;                                  // captura a natureza da operação: 'save': INCLUI novo post, ou, 'update': ATUALIZA de post existente                                  // captura a natureza da operação: 'save': INCLUI novo post, ou, 'update': ATUALIZA de post existente
            Prism.highlightAll();
            //CKEDITOR.instances.editor1.setData('');
            tinymce.get("editor1").setContent("");
            document.querySelector('#post_title').value = '';
            let formData = {
                id_conteudo: _idConteudoEscolhidoUserLogado,
                trilha_id: _trilhaIdEscolhidaUserLogado,
                user_id: _userIdUserLogado,
                post_title: _postTitle,
                post: _conteudoTextareaEditor,
                operation: _operation,
                post_id_edit: _post_id_edit
            }; 
            console.log('o que está chegando no _formSalvaPost');
            console.log(formData);
            $.ajax({
                type: "POST",
                url: "php/backend/salva_post.php",
                data: formData,
                dataType: "json",
                encode: true,
                beforeSend: function(){
                    console.log('aguardando resposta do backend');
                },
                success: function (data) {
                    console.log('TTTTTTTTTTTTTTTTTTTTTT '+data[0].status);
                    _post.style.height = 'auto';
                    if(data[0].status === 'update'){
                        _postEditContext.style.height = 'auto';
                        _btnSalvaTextoDoEditor.textContent = 'Salvar';
                        //_btnSalvaTextoDoEditor.classList.add('desabilita');
                        //_postEditContext = 
                        _postEditContext.querySelector('.post-title h5').textContent = formData.post_title;
                        _postEditContext.querySelector('.post-content').innerHTML = formData.post;                    
                        _postEditContext.style.backgroundColor = 'initial';
                        // na linha a seguir retornamos a "natureza da operação" para o padrão: status 'save'
                        _operation = _formSalvaPost.querySelector('#operation');
                        _operation.value = 'save';                
                    } else {           
                        _operation = _formSalvaPost.querySelector('#operation');
                        // na linha a seguir retornamos a "natureza da operação" para o padrão: status 'save'
                        _operation.value = 'save';
                        _divListaDePosts.innerHTML = `<img class="spin" src="images/spin.gif" />`;
                        console.log('XXXXXXXXXXXXXXXXXXXXXX '+formData.id_conteudo);
                        listaPostsPorConteudo(formData.id_conteudo);                       
                    }
                    Prism.highlightAll();
                    //_postEditContext.style.height = 'auto';
                    //_post.style.height = 'auto';
                    ativaEditDeletePosts();
                }
            });
        });
    
        
        // Botão "cancelar" form-salva-post
        _btnSalvaPostCancelar.addEventListener('click', function(){ 
            limpaEditor();
            ativaEditDeletePosts();
        });




    // MONTAGEM ESTRUTURA DO MENU LATERAL COM AS TRILHAS E LINKS DE CONTEÚDOS DO USUÁRIO LOGADO - PÁGINA HOME AO LOGAR NO SISTEMA PARA USUÁRIOS DO TIPO DE ACESSO 2 - USUÁRIO COMUM (ALUNO)
//function montaMenuTrilhaVideosDinamicamente() { 
    let __link = null;
    console.log('CONTEÚDO DA VARIÁVEL _userIdDoUsuario AQUI: '+_userIdDoUsuario);
    let formData = {
        user_logado: _userIdDoUsuario
    }
    
    $.ajax({
        type: "POST",
        url: "php/backend/monta_json_menu_categia_trilhas_videos.php",
        data: formData,
        dataType: "json",
        encode: true
    }).done(function (data) {
        console.log(data);
        let cont = 0;
        let _cont = 0;
        let arrAux = [];
        let catAux = '';
        let trilhaAux = '';
        let videoAux = '';
        data.forEach(function(item){
            if(item.trilha_name != trilhaAux){ 
                obje[cont] = {categoria:item.abrev_categoria,  trilha: {nome: item.trilha_name, video: [{conteudo_descricao: item.conteudo_descricao, codigoyt: item.conteudo_codigoyoutube, trilha_id: item.trilha_id, id_conteudo: item.id_conteudo}]}};
                trilhaAux = item.trilha_name;
                _cont = cont;
                cont++;
            } else if(item.trilha_name == trilhaAux){
                obje[_cont].trilha.video.push({conteudo_descricao: item.conteudo_descricao, codigoyt: item.conteudo_codigoyoutube, trilha_id: item.trilha_id, id_conteudo: item.id_conteudo});
            }
        }); 

    setTimeout(() => { 
        let categoria = '';

        obje.forEach(function(objeto){
            console.log(obje) ;
                if(categoria != objeto.categoria){
                    localInserirH3 = localInserir; 
                    arr[0] = H3.cloneNode(true);
                    arr[0].innerText = objeto.categoria;
                    localInserirH3.append(arr[0]);
                    categoria = objeto.categoria;
                }
                arr = [];
                arr[0] = LI_trilha.cloneNode(true);
                arr[0].querySelector('a span span').innerText = ` ${objeto.trilha.nome} `;
                child_menu = arr[0].querySelector('.child_menu');
                localInserir.append(arr[0]);
                arr = [];
                objeto.trilha.video.forEach(function(video){
                    arr[1] = LI_Item.cloneNode(true);
                    arr[1].querySelector('a').innerText = video.conteudo_descricao;
                    arr[1].querySelector('a').setAttribute('data-codigoyt', video.codigoyt);
                    arr[1].querySelector('a').setAttribute('data-conteudo_descricao', video.conteudo_descricao);
                    arr[1].querySelector('a').setAttribute('data-trilha_id', video.trilha_id);
                    arr[1].querySelector('a').setAttribute('data-id_conteudo', video.id_conteudo);
                    //arr[1].querySelector('a').setAttribute('data-codigoyt', objeto.codigoyt);
                    child_menu.append(arr[1]);
                    arr = [];
                });
        });

        /*setTimeout(() => {
            let todos = localInserir.querySelectorAll('.active');
            for(ob of todos){
                ob.classList.remove('li-a-clonar');
                    ob.querySelector('ul').style.display = 'none';
                    ob.classList.remove('active');
                contador = contador + 1;
            }
        }, 100);*/
        setTimeout(() => {
            localInserir.style.opacity = 1;        
        }, 10); 
        


        init_sidebar();


        let todos = localInserir.querySelectorAll('.active');
        for(ob of todos){
            ob.classList.remove('li-a-clonar');
                ob.querySelector('ul').style.display = 'none';
                ob.classList.remove('active');
            contador = contador + 1;
        }   
        
        const _videoLinks = document.querySelectorAll('.side-menu .child_menu li a');
        _videoLinks.forEach(function(link){
            link.addEventListener('click', function(e){
                e.preventDefault();
                console.log(e.target);
                console.log(typeof e.target);
                console.log(e.target.dataset.trilha_id);
                _idConteudoEscolhidoUserLogado = e.target.dataset.id_conteudo;              
                _userIdUserLogado = document.querySelector('.id-usuario-logado').textContent;
                //console.log(e.target.innerText, e.target.dataset.codigoyt);
                _addNewPost.classList.remove('remove');
                _listaDePosts.classList.remove('remove');
                carregaVideo(e.target.dataset.codigoyt, e.target.innerText);
                listaPostsPorConteudo(_idConteudoEscolhidoUserLogado);
            });
        });
    
    }, 20);

        
    }); 




//} 





















































































function tinymceCarregamento(){
     // TinyMCE
     tinymce.init({
        selector: '#editor1',
        menubar:false,
        language: 'pt_BR',
        placeholder: 'Insira aqui seu trecho de código',
        height: 180,
        branding: false,
        resize: true,
        plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount', 'codesample', 'fullscreen'
        ],
        toolbar_mode: 'sliding',
        toolbar1:'bold italic backcolor | alignleft aligncenter ' +
        'removeformat | link image | help | fullscreen|   | codesample |   |',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
    });    
}








    function carregaVideo(codigoyt, titulo_video){
        $(document).ready(function(){
                const _embedVideoYoutube = document.querySelector('.video-content .embed-video-youtube');
                const _videoContent = document.querySelector('.video-content');
                const _xTitle = document.querySelector('.esquerda .x_title h2');
                _xTitle.innerHTML = `<i class="fa-solid fa-video"></i> <span class="titulo-do-video">${titulo_video}</span>`;
                const _video = document.querySelector('#video-abertura');
                _video.setAttribute('src', `https://www.youtube.com/embed/${codigoyt}?enablejsapi=1&version=3&rel=0&amp;autoplay=1&amp;start=0`);
        });                
    }
























  


    

    function listaPostsPorConteudo(id_conteudo) { // lista POSTs do vídeo escolhido no menu lateral (dentro da trilha, é claro) - visão MINHAS TRILHAS. DO ALUNO
        var formData = {
            id_conteudo : id_conteudo
        };    
        $.ajax({
            type: "POST",
            url: "php/backend/lista_posts_por_conteudo.php",
            data: formData,
            dataType: "json",
            encode: true,
            beforeSend: function( xhr ) {
                //_listaDePosts.innerHTML = `<img class="spin" src="images/spin.gif" />`;
            }
        }).done(function (data) { 
            console.log('CONSOLE.LOG(data): '+data);
            console.log(data);
            console.log('CONSOLE.LOG(data): '+data);
            //_divListaDePosts.innerHTML = '';            
            _listaDePosts.innerHTML = `<img class="spin" src="images/spin.gif" />`;
            //return;
            //for(post_content of data){
            data.forEach(function(post_content){
                console.log(data);
                console.log(post_content.post_dateupdate);
                let _dateArr = post_content.post_dateupdate.split(" ");
                let _postDate = _dateArr[0];
                let _postHour = _dateArr[1];
                let _dateDDMMAAAA = _postDate.split("-");
                let _dia = _dateDDMMAAAA[2];
                let _mes = _dateDDMMAAAA[1];
                _mes = _mes.length == 1 ? `0${_mes}` : _mes;
                let _ano = _dateDDMMAAAA[0];
                console.log(_dateArr);

                str = `<div>Conteudo do post --> ${post_content.post}</div>`;

                /*let str = `
                <div class="post mb-4 p-4">
                    <div class="post-header">
                        <span class="post-date">
                            <h3>
                            ${`<i class="fa-solid fa-calendar-days"></i>&nbsp;<span>${_dia}/${_mes}/${_ano}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa-solid fa-clock"></i>&nbsp;<span class="hora">${_postHour}</span> `}
                            </h3>
                        </span>
                        <span class="post-tools">
                            <i class="fa-solid fa-pencil edit-post" data-post_id_edit="${post_content.post_id}"></i>
                            <i class="fa-solid fa-trash-can trash-post" data-post_id="${post_content.post_id}"></i>
                        </span>
                    </div>
                    <hr>
                    <div class="post-title">
                        <h5>${post_content.post_title}</h5>
                    </div>
                    <div class="post-content">${post_content.post}</div>
                    <div class="post-footer">
                    ${`<small><i class="fa-solid fa-hashtag"></i><span>${post_content.post_id}</span></small>`}
                    </div>
                </div>
                `;*/
                $(_divListaDePosts).append(str);               
                Prism.highlightAll();
                //let _heightDoPost = _divListaDePosts.querySelector('.post').offsetHeight;
                //_divListaDePosts.querySelector('.post').style.height = `${_heightDoPost}px`;
            });





            
            let _trashPost = document.querySelectorAll('.trash-post');
            let _editPost = document.querySelectorAll('.edit-post');
            let _editTitleEditor = document.querySelector('.container-editor #post_title');
            let _editContentEditor = document.querySelector('.container-editor #post_content');
            /*_trashPost.forEach(function(trashPostIcon){
                setTimeout(function(){
                    trashPostIcon.parentNode.parentNode.parentNode.style.opacity = 1;
                }, 500)
                trashPostIcon.addEventListener('click', function(e){
                    e.target.parentNode.style.opacity = 0;
                    e.target.parentNode.style.pointerEvents = 'none';
                    $(e.target).closest('.post-header').find('.confirma-exclusao-post').css("margin-top", 0);
                    $(e.target).closest('.post-header').find('.confirma-exclusao-post').css("pointer-events", 'all');
                    $(e.target).closest('.post-header').find('.confirma-exclusao-post').css("display", 'block');
                    let alvo = e.target;
                    let _leftTrash = `${e.target.getBoundingClientRect().left-180}px`;
                    let _topTrash = `${e.target.getBoundingClientRect().top}px`;
                    console.log(e.target.getBoundingClientRect());
                    console.log(_leftTrash);
                    console.log(_topTrash);
                    let confirm = document.querySelector('.confirma-exclusao-post');
                    confirm.style.left = _leftTrash;
                    confirm.style.top = _topTrash;
                    document.querySelector('.mascara').style.display = 'block';
                    setTimeout(function(){
                        confirm.style.opacity = 1;
                        document.querySelector('.mascara').style.opacity = 1;
                        document.querySelector('.main_container').style.pointerEvents = 'none';
                    },400)
                    _postAExcluir = e.target.dataset.post_id;
                    _postDaListaASerExcluido = e.target.parentNode.parentNode.parentNode;
                    console.log(_postDaListaASerExcluido);
                });
            });
            _editPost.forEach(function(editPostIcon){
                editPostIcon.addEventListener('click', function(e){
                    console.log(`Clicou no edit do post: ${e.target.dataset.post_id_edit}`);
                    desativaEditDeletePosts();
                    _postEditContext = e.target.parentNode.parentNode.parentNode;
                    _postEditContextTitle = _postEditContext.querySelector('.post-title h5');
                    _postEditContextContent = _postEditContext.querySelector('.post-content').innerHTML;
                    _postEditContext.style.backgroundColor = "beige";
                    console.log(_postEditContextTitle.textContent);
                    _editTitleEditor.value = _postEditContextTitle.textContent;
                    let __operation = document.querySelector('#operation');
                    __operation = __operation.value = 'update';
                    document.querySelector('.salva-texto-do-editor').textContent = 'Atualizar';                    
                    console.log('--------------------'+e.target.dataset.post_id_edit);
                    document.querySelector('#post_id_edit').value = e.target.dataset.post_id_edit;

                    Prism.highlightAll();                            
                    tinymce.get("editor1").setContent(_postEditContextContent);
                });
            });*/
        })
    } 


    function limpaEditor(){
        console.log('limpaEditor');
        document.querySelector('#post_title').value = '';      
        tinymce.get("editor1").setContent(""); 
        let __posts = document.querySelectorAll('.post');
        __posts.forEach(function(__post){
            __post.style.backgroundColor = "initial";
        });
        _btnSalvaTextoDoEditor.textContent = 'Salvar';
        let _operation = document.querySelector('#operation');
        _operation.value = 'save';
    
    }
    
    
    function desativaEditDeletePosts(){
        let elements = document.querySelectorAll('.lista-de-posts .post .post-header .post-tools > i');
        elements.forEach(function(item){
            item.classList.add('post-tools-color-change');
        });    
        let _mask = document.querySelector('.mask-left-col');
        _mask.classList.add('mask-show');
    }
    
    function ativaEditDeletePosts(){
        let elements = document.querySelectorAll('.lista-de-posts .post .post-header .post-tools > i');
        elements.forEach(function(item){
            item.classList.remove('post-tools-color-change');
        });    
        let _mask = document.querySelector('.mask-left-col');
        _mask.classList.remove('mask-show');
    }
    






    