    const _formSalvaPost = document.querySelector('#form-salva-post');
    _formSalvaPost.classList.add('remove');

    const _listaDePosts = document.querySelector('.lista-de-posts');
    _listaDePosts.innerHTML = '';
    _listaDePosts.classList.add('remove');
    
     const _addNewPost = document.querySelector('.add-new-post');

     _addNewPost.addEventListener('click', function(e){
        _formSalvaPost.classList.remove('remove');
        desativaDivPostTools();
        e.target.classList.add('remove');
     });

     let str = '';

     const _rightCol = document.querySelector('.right_col');
    
    const _linkChevronRecolheVideo = document.querySelector('.video-content .x_panel .panel_toolbox .collapse-link');

    const _menuToggle = document.querySelector('#menu_toggle');
    const _body = document.querySelector('body');
    _menuToggle.addEventListener('click', function(){
            _body.classList.toggle('nav-md');
            _body.classList.toggle('nav-sm');
    });

   

  
               
            const _idUserLogado = document.querySelector('#id-user-logado').textContent;
        
        console.log(_idUserLogado);
   


    const obje = [];
    let _idConteudoEscolhidoUserLogado = '';
    let _trilhaIdEscolhidaUserLogado = '';
    let _snippetPostTitleRightHome = '';
    let _idConteudo = '';

    const _esquerda = document.querySelector('.esquerda');
    
    const _containerEditor = document.querySelector('.editor');

    const _mask = document.querySelector('.mask-left-col');

    
    const _divListaDePosts = document.querySelector('.lista-de-posts');
    

    const _post = document.querySelector('.lista-de-posts');

    
    let _postEditContext = '';
    let _postEditContextTitle = '';
    let _postEditContextContent = '';
    let _operation = '';

    //let _userIdDoUsuario = '31';

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
    const _btnSalvaPostDescartar = document.querySelector('.salva-post-descartar');


    //_btnSalvaTextoDoEditor.addEventListener('click', function(){
        $(_formSalvaPost).submit(function(event){
            event.preventDefault();
            event.stopPropagation();           
            //Prism.highlightAll();
            console.log('MMMMMMM '+tinymce.activeEditor);
            let _conteudoTextareaEditor = tinymce.get("editor1").getContent();
            let _postTitle = document.querySelector('#post_title').value; 
            let _operation = _formSalvaPost.querySelector('#operation');    // captura a natureza da opera????o: 'save': INCLUI novo post, ou, 'update': ATUALIZA de post existente
            _operation = _operation.value;
            if(_conteudoTextareaEditor == '' || _postTitle.trim() == ''){
                _containerEditor.classList.add('efeito-fade');            
                console.log('algum campo n??o foi preenchido');
                setTimeout(function(){
                    _containerEditor.classList.remove('efeito-fade');
                }, 100);
                return;
            }
            let _post_id_edit = _formSalvaPost.querySelector('#post_id_edit');    // captura a natureza da opera????o: 'save': INCLUI novo post, ou, 'update': ATUALIZA de post existente
            _post_id_edit = _post_id_edit.value;                                  // captura a natureza da opera????o: 'save': INCLUI novo post, ou, 'update': ATUALIZA de post existente                                  // captura a natureza da opera????o: 'save': INCLUI novo post, ou, 'update': ATUALIZA de post existente
            //Prism.highlightAll();
            tinymce.get("editor1").setContent("");
            document.querySelector('#post_title').value = '';
            let formData = {
                id_conteudo: _idConteudoEscolhidoUserLogado,
                trilha_id: _trilhaIdEscolhidaUserLogado,
                user_id: _idUserLogado,
                post_title: _postTitle,
                post: _conteudoTextareaEditor,
                operation: _operation,
                post_id_edit: _post_id_edit
            }; 
            console.log('o que est?? chegando no _formSalvaPost');
            console.log(formData);
            $.ajax({
                type: "POST",
                url: "../backend/salva_post.php",
                data: formData,
                dataType: "json",
                encode: true,
                success: function (data) {
                    console.log('TTTTTTTTTTTTTTTTTTTTTT VOLTANDO DO SALVA_POST.PHP no _formSalvaPost :'+data[0].status);
                    //_post.style.height = 'auto';
                    console.log(data[0].status);
                    //console.log(data[1].ui);
                    if(data[0].status === 'update'){
                        _postEditContext.style.height = 'auto';
                        _btnSalvaTextoDoEditor.textContent = 'Salvar';
                        //_btnSalvaTextoDoEditor.classList.add('desabilita');
                        //_postEditContext = 
                        _postEditContext.querySelector('.post-title h5').textContent = formData.post_title;
                        _postEditContext.querySelector('.post-content').innerHTML = formData.post;                    
                        //_postEditContext.style.backgroundColor = 'initial';
                        // na linha a seguir retornamos a "natureza da opera????o" para o padr??o: status 'save'
                        _operation = _formSalvaPost.querySelector('#operation');
                        _operation.value = 'save';
                        //$(_linkChevronRecolheVideo).trigger('click');                     
                        _formSalvaPost.classList.add('remove');
                        _addNewPost.classList.remove('remove');
                        console.log(_postEditContext);
                        _postEditContext.classList.remove('bg-beige');             
                        _postEditContext.classList.remove('bg-beige');
                        _listaDePosts.classList.remove('desativa-lista-de-posts');
                        adicionaBotaoCopyNoPost(_postEditContext);
                    } else {    
                        let _postInserido = document.querySelector('.post:first-child');
                        _operation = _formSalvaPost.querySelector('#operation');
                        _operation.value = 'save';                        
                        _formSalvaPost.classList.add('remove');
                        _addNewPost.classList.remove('remove');
                        console.log('XXXXXXXXXXXXXXXXXXXXXX '+formData.id_conteudo);
                        //adicionaBotaoCopyNoPost(_postEditContext);
                        listaPostsPorConteudo(formData.id_conteudo);
                        adicionaBotaoCopyNoPost(_postEditContext);
                        _listaDePosts.classList.remove('desativa-lista-de-posts'); 
                        //adicionaBotaoCopyNoPost(_postInserido);
                    }
                    Prism.highlightAll();
                    //_postEditContext.style.height = 'auto';
                    //_post.style.height = 'auto';
                    ativaEditDeletePosts();
                    ativaDivPostTools();
                }
            });
        });
    
        
        // Bot??o "cancelar" form-salva-post
        _btnSalvaPostCancelar.addEventListener('click', function(){ 
            limpaEditor();
            ativaEditDeletePosts();  
        });

        
        // Bot??o "descartar" form-salva-post
        _btnSalvaPostDescartar.addEventListener('click', function(){ 
            limpaEditor();
            ativaEditDeletePosts();
            ativaDivPostTools();
            console.log(_postEditContext);
            if(_postEditContext !== ''){
                _postEditContext.classList.remove('bg-beige');
            }
            _formSalvaPost.classList.add('remove');            
            _addNewPost.classList.remove('remove');
            _listaDePosts.classList.remove('desativa-lista-de-posts');
        });




    // MONTAGEM ESTRUTURA DO MENU LATERAL COM AS TRILHAS E LINKS DE CONTE??DOS DO USU??RIO LOGADO - P??GINA HOME AO LOGAR NO SISTEMA PARA USU??RIOS DO TIPO DE ACESSO 2 - USU??RIO COMUM (ALUNO)
//function montaMenuTrilhaVideosDinamicamente() { 
    let __link = null;
    console.log('CONTE??DO DA VARI??VEL _userIdDoUsuario AQUI: '+_idUserLogado);
    let formData = {
        user_logado: _idUserLogado
    }
    
    $.ajax({
        type: "POST",
        url: "../backend/monta_json_menu_categia_trilhas_videos.php",
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
                ///////////////////////////////////////////////////////////////////////////
                //arr[0].addEventListener('click', function(e){
                    //console.log('cliquei na trilha: '+ objeto.trilha.nome);
                    //console.log(e.target);
                    //e.target.parentNode.parentNode.querySelector('.chevron').classList.toggle('chevron-down');
                //}); //////////////////////////////////////////////////////////////////////
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
        setTimeout(() => {
            localInserir.style.opacity = 1;        
        }, 10);

        init_sidebar();

        const arrToolbar = [];

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
                e.target.parentNode.style.color = '#fff !important';
                console.log(e.target);
                console.log(e.target.parentNode);
                console.log(e.target.parentNode.dataset.color);
                console.log(typeof e.target);
                console.log(e.target.dataset.trilha_id);
                _trilhaIdEscolhidaUserLogado = e.target.dataset.trilha_id
                ativaDivPostTools();
                setTimeout(() => {
                    let _codeToolbarAll = document.querySelectorAll('.code-toolbar');
                     _codeToolbarAll.forEach(function(item){
                        console.log(item);
                        let preList = item.querySelectorAll('pre'); 
                        if(preList.length != 0){
                            if(preList.length == 1){
                                console.log(preList.length);
                                arrToolbar[0] = [];
                                arrToolbar[0] = document.createElement('button');
                                arrToolbar[0].classList.add('btn');
                                arrToolbar[0].classList.add('btn-outline-secondary');
                                arrToolbar[0].classList.add('btn-copy-code');
                                arrToolbar[0].innerHTML = 'Copy';
                                    arrToolbar[0].addEventListener('click',function(e){
                                        e.target.innerText = 'Copied';
                                        setTimeout(() => {
                                            e.target.innerText = 'Copy';                                                                
                                        }, 700);
                                        let elemento = item.querySelector('code');
                                        selecionaTexto(elemento);
                                    });
                                let _toolbar = item.querySelector('.toolbar');
                                    if(_toolbar){                                    
                                        _toolbar.remove();
                                    }
                                console.log(item);
                                let pre = item.querySelector('pre');
                                console.log(pre);
                                pre.prepend(arrToolbar[0]);
                                arrToolbar[0] = [];  
                            } else if(preList.length > 1){
                                preList.forEach(function(preItem){
                                    console.log(preList.length);
                                    arrToolbar[0] = [];
                                    arrToolbar[0] = document.createElement('button');
                                    arrToolbar[0].classList.add('btn');
                                    arrToolbar[0].classList.add('btn-outline-secondary');
                                    arrToolbar[0].classList.add('btn-copy-code');
                                    arrToolbar[0].innerHTML = 'Copy';
                                        arrToolbar[0].addEventListener('click',function(e){
                                            e.target.innerText = 'Copied';
                                            setTimeout(() => {
                                                e.target.innerText = 'Copy';                                                                
                                            }, 700);
                                            let elemento = preItem.querySelector('code');
                                            selecionaTexto(elemento);
                                        });
                                    let _toolbar = item.querySelector('.toolbar');
                                        if(_toolbar){                                    
                                            _toolbar.remove();
                                        }
                                    console.log(item);
                                    console.log(preList);
                                    console.log(preItem);
                                    preItem.prepend(arrToolbar[0]);
                                    arrToolbar[0] = [];
                                });
                            }                          
                        }
                    });                   
                }, 50);
                _formSalvaPost.classList.add('remove');
                _addNewPost.classList.remove('remove');
                _esquerda.style.height = '90vh';
                _idConteudoEscolhidoUserLogado = e.target.dataset.id_conteudo;              
                _userIdUserLogado = document.querySelector('.id-usuario-logado').textContent;
                //console.log(e.target.innerText, e.target.dataset.codigoyt);
                _addNewPost.classList.remove('remove');
                carregaVideo(e.target.dataset.codigoyt, e.target.innerText);
                listaPostsPorConteudo(_idConteudoEscolhidoUserLogado);
            });//
        });
    
    }, 20);

        
    }); 




//} 




















    $('#form-confirma-exclusao-post-sim').submit(function(event){
        event.preventDefault();
        console.log('entrou no form que exclui post');
        console.log(_idConteudo);
        console.log(_postAExcluir);
        console.log(_postDaListaASerExcluido);
        let _btnSnippetListedLink = document.querySelectorAll('.snippet-listed-link');
        console.log(_btnSnippetListedLink);
        //_btnSnippetListedLink[_snippetDaListaASerExcluido].style.opacity = 0;
        //_btnSnippetListedLink[_postDaListaASerExcluido].style.opacity = 0;
        //_btnSnippetListedLink[_snippetDaListaASerExcluido].style.opacity = 0;
        //$(_btnSnippetListedLink[_snippetDaListaASerExcluido]).fadeOut( "slow" );
        excluiPost(parseInt(_postAExcluir));
        //let _postExcluido = document.querySelector('.lista-de-posts '+_postDaListaASerExcluido);
        console.log(_postDaListaASerExcluido);
        //_postExcluido.style.opacity = 0;
        //document.querySelector('.confirma-exclusao-post').textContent = 'POST EXCLU??DO!!!';
        _postDaListaASerExcluido.classList.remove('bg-beige');
        _postDaListaASerExcluido.querySelector('.post-header').style.opacity = 0;
            document.querySelector('.confirma-exclusao-post').style.opacity = 0;
            document.querySelector('.mascara').style.opacity = 0;
            _postDaListaASerExcluido.style.opacity = 0;
            _postDaListaASerExcluido.style.height = 0;
        setTimeout(function(){
            _postDaListaASerExcluido.querySelector('.post-header').style.display = 'none';
            _postDaListaASerExcluido.style.display = 'none';
        },400)
        setTimeout(function(){
            //document.querySelector('.confirma-exclusao-post').style.display = 'none';
            document.querySelector('.confirma-exclusao-post').style.top = -60+'px';
            document.querySelector('.confirma-exclusao-post').style.left = 0;
            document.querySelector('.confirma-exclusao-post').style.opacity = 0;
            document.querySelector('.mascara').style.display = 'none';            
            document.querySelector('.main_container').style.pointerEvents = 'all';
            //listaPostsPorConteudo(id_conteudo);
        },800)        
    });


    $('#form-confirma-exclusao-post-nao').submit(function(event){
        event.preventDefault();
        console.log('entrou no form que exclui post');
        console.log(_postAExcluir);
        //let _postExcluido = document.querySelector('.lista-de-posts '+_postDaListaASerExcluido);
        console.log(_postDaListaASerExcluido);
        _postDaListaASerExcluido.querySelector('.post-tools').style.opacity = 1;
        _postDaListaASerExcluido.querySelector('.post-tools').style.pointerEvents = 'all';
        _postDaListaASerExcluido.classList.remove('bg-beige');
        //_postExcluido.style.opacity = 0;
        //document.querySelector('.confirma-exclusao-post').textContent = 'POST EXCLU??DO!!!';
        
            //document.querySelector('.confirma-exclusao-post').style.display = 'none';
            document.querySelector('.confirma-exclusao-post').style.opacity = 0;
            document.querySelector('.confirma-exclusao-post').style.top = -60+'px';
            document.querySelector('.confirma-exclusao-post').style.left = 0; 
                document.querySelector('.mascara').style.opacity = 0;
            setTimeout(function(){  
                document.querySelector('.mascara').style.display = 'none';            
                document.querySelector('.main_container').style.pointerEvents = 'all';              
            }, 500);                
    }); 


































































function tinymceCarregamento(){
     // TinyMCE
     tinymce.init({
        selector: '#editor1',
        menubar:false,
        language: 'pt_BR',
        placeholder: 'Insira aqui seu trecho de c??digo',
        height: 180,
        branding: false,
        resize: true,
        plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount', 'codesample', 'fullscreen', 'code'
        ],
        toolbar_mode: 'sliding',
        toolbar1:'bold italic backcolor | alignleft aligncenter ' +
        'removeformat | link image | help | fullscreen|   | codesample |   | code',
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
                _video.setAttribute('src', `https://www.youtube.com/embed/${codigoyt}?enablejsapi=1&version=3&rel=0&amp;autoplay=1&amp;start=0;end=1`);
        });                
    }
























  


    

    function listaPostsPorConteudo(id_conteudo) { // lista POSTs do v??deo escolhido no menu lateral (dentro da trilha, ?? claro) - vis??o MINHAS TRILHAS. DO ALUNO
        var formData = {
            id_conteudo : id_conteudo,
            user_id: _idUserLogado,
            trilha_id: _trilhaIdEscolhidaUserLogado
        };    
        $.ajax({
            type: "POST",
            url: "../backend/lista_posts_por_conteudo.php",
            data: formData,
            dataType: "json",
            encode: true,
            beforeSend: function( xhr ) {
            }
        }).done(function (data) { 
            console.log('CONSOLE.LOG(data): '+data);
            console.log(data);
            console.log(data.length);
            console.log('CONSOLE.LOG(data): '+data);
            str = '';
            if(data.length == 0){
                console.log('ENTROU AQUI PARA SAIR COM RETURN');
                srt = `<p>&nbsp;</p>`;
                _divListaDePosts.innerHTML = str;
                _listaDePosts.classList.add('remove');
                return;
            }
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
                console.log(post_content.post);
                str = `
                <div class="post mb-4 p-4">
                    <div class="post-header">
                        <span class="post-date">
                            <h3>
                            </h3>
                        </span>
                        <span class="post-tools">
                            <i class="fa-solid fa-pencil edit-post" data-post_id_edit="${post_content.post_id}"></i>
                            <span class="icons-separator"></span>
                            <i class="fa-solid fa-trash-can trash-post" data-post_id="${post_content.post_id}"></i>
                        </span>
                    </div>
                    <hr>
                    <div class="post-title">
                        <h5>${post_content.post_title}</h5>
                    </div>
                    <div class="post-content">${post_content.post}</div>
                    <div class="post-footer">
                    <hr>
                    ${`<small><i class="fa-solid fa-hashtag"></i><span>${post_content.post_id}</span></small>`}
                    
                            ${`
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small><i class="fa-solid fa-calendar-days"></i>&nbsp;<span class="data">${_dia}/${_mes}/${_ano}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa-solid fa-clock"></i>&nbsp;<span class="hora">${_postHour}</span></small>`}
                    </div>
                </div>
                ` + str;
                _divListaDePosts.innerHTML = str;
                console.log(_divListaDePosts);
                let teste = '#'+post_content.post_id;
                console.log(teste);
                let _ultimoPostInserido = _divListaDePosts.querySelector('.post:first-child');
                console.log(_ultimoPostInserido);
                adicionaBotaoCopyNoPost(_ultimoPostInserido);
                console.log(_ultimoPostInserido);
                console.log(post_content.post_id);
                Prism.highlightAll();
                let _heightDoPost = _divListaDePosts.querySelector('.post').offsetHeight;
                _divListaDePosts.querySelector('.post').style.height = `${_heightDoPost}px`;
                _divListaDePosts.style.height = '90vh';
                //console.log('CONSOLE.LOG STR: '+str);
            });
            _listaDePosts.classList.remove('remove');
            str = '';            
            let _trashPost = document.querySelectorAll('.trash-post');
            let _editPost = document.querySelectorAll('.edit-post');
            let _editTitleEditor = document.querySelector('.container-editor #post_title');
            let _editContentEditor = document.querySelector('.container-editor #post_content');
            _trashPost.forEach(function(trashPostIcon){
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
                    _postAExcluir = e.target.dataset.post_id;
                    _postDaListaASerExcluido = e.target.parentNode.parentNode.parentNode;
                    console.log(_postDaListaASerExcluido);
                    setTimeout(function(){
                        confirm.style.opacity = 1;
                        document.querySelector('.mascara').style.opacity = 1;
                        document.querySelector('.main_container').style.pointerEvents = 'none';
                        _postDaListaASerExcluido.classList.add('bg-beige');
                    },100)
                    console.log(_postDaListaASerExcluido);
                });
            });
            _editPost.forEach(function(editPostIcon){
                editPostIcon.addEventListener('click', function(e){
                    console.log(`Clicou no edit do post: ${e.target.dataset.post_id_edit}`);
                    //desativaEditDeletePosts();
                    //$(_linkChevronRecolheVideo).trigger('click');                     
                    _formSalvaPost.classList.remove('remove');
                    _addNewPost.classList.add('remove');
                    _postEditContext = e.target.parentNode.parentNode.parentNode;
                    _listaDePosts.classList.add('desativa-lista-de-posts');
                        if(_postEditContext.querySelector('.btn-copy-code') !== null){
                            _postEditContext.querySelector('.btn-copy-code').remove();
                        }
                    _postEditContextTitle = _postEditContext.querySelector('.post-title h5');
                    console.log(_postEditContext);
                        if(_postEditContext.querySelectorAll('.post-content pre').length > 0){
                            let _buttonsCopy = _postEditContext.querySelectorAll('.post-content pre .btn-copy-code');
                            _buttonsCopy.forEach(function(_buttonsCopyItem){
                                _buttonsCopyItem.remove();
                            });
                            //_postEditContext.querySelector('.post-content .btn-copy-code').remove();
                            console.log('MAIOR QUE ZERO: '+_postEditContext.querySelectorAll('.post-content pre').length);
                        } else {
                            console.log('N??O TEM TAG PRE: '+_postEditContext.querySelectorAll('.post-content pre').length);                            
                        }
                    console.log(_postEditContext);
                    _postEditContextContent = _postEditContext.querySelector('.post-content').innerHTML;
                    //console.log()
                    _postEditContext.classList.add('bg-beige');
                    console.log(_postEditContextTitle.textContent);
                    _editTitleEditor.value = _postEditContextTitle.textContent;
                    let __operation = document.querySelector('#operation');
                    __operation = __operation.value = 'update';
                    document.querySelector('.salva-texto-do-editor').textContent = 'Atualizar';                    
                    console.log('--------------------'+e.target.dataset.post_id_edit);
                    document.querySelector('#post_id_edit').value = e.target.dataset.post_id_edit;

                    //Prism.highlightAll();                            
                    tinymce.get("editor1").setContent(_postEditContextContent);
                });
            });
        })
    } 


    function limpaEditor(){
        console.log('limpaEditor');
        document.querySelector('#post_title').value = '';      
        tinymce.get("editor1").setContent(""); 
        let __posts = document.querySelectorAll('.post');
        __posts.forEach(function(__post){
            __post.style.backgroundColor = "snow";
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
        //let _mask = document.querySelector('.mask-left-col');
        _mask.classList.add('mask-show');
    }

    
    function ativaEditDeletePosts(){
        let elements = document.querySelectorAll('.lista-de-posts .post .post-header .post-tools > i');
        elements.forEach(function(item){
            item.classList.remove('post-tools-color-change');
        });    
        //let _mask = document.querySelector('.mask-left-col');
        _mask.classList.remove('mask-show');
    }

        
    function ativaDivPostTools(){
        let elements = document.querySelectorAll('.lista-de-posts .post .post-header .post-tools');
        elements.forEach(function(item){
            item.style.opacity = 1;
            item.style.pointerEvents = 'all';
        });    
        //let _mask = document.querySelector('.mask-left-col');
        _mask.classList.add('mask-show');
    }

        
    function desativaDivPostTools(){
        let elements = document.querySelectorAll('.lista-de-posts .post .post-header .post-tools');
        elements.forEach(function(item){
            item.style.opacity = 0;
            item.style.pointerEvents = 'none';
        });    
        //let _mask = document.querySelector('.mask-left-col');
        _mask.classList.add('mask-show');
    }
    


    function selecionaTexto(elemento){
        if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(elemento);
        range.select();
        document.execCommand('copy');
        } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(elemento);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        }        
    }

    function excluiPost(post_id){
        var formData = {
            post_id: post_id
        };    
        $.ajax({
            type: "POST",
            url: "../backend/exclui_post.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            _postDaListaASerExcluido.style.opacity = 0;
            _postDaListaASerExcluido.style.height = '1px';
            _listaDePosts.classList.remove('desativa-lista-de-posts');
        });
    }



    function adicionaBotaoCopyNoPost(_postEditContext){
            setTimeout(() => {
                let arrToolbar = [];
                //let _codeToolbarAll = _postEditContext.querySelectorAll('.code-toolbar');
                let _codeToolbarAll = document.querySelectorAll('.code-toolbar');
                _codeToolbarAll.forEach(function(item){
                    console.log(item);
                    let preList = item.querySelectorAll('pre'); 
                    if(preList.length !== 0){
                        if(preList.length == 1){
                            console.log(preList.length);
                            arrToolbar[0] = [];                            
                            arrToolbar[0] = document.createElement('button');
                            arrToolbar[0].classList.add('btn');
                            arrToolbar[0].classList.add('btn-outline-secondary');
                            arrToolbar[0].classList.add('btn-copy-code');
                            arrToolbar[0].innerHTML = 'Copy';
                                arrToolbar[0].addEventListener('click',function(e){
                                    e.target.innerText = 'Copied';
                                    setTimeout(() => {
                                        e.target.innerText = 'Copy';                                                                
                                    }, 700);
                                    let elemento = item.querySelector('code');
                                    selecionaTexto(elemento);
                                });
                            let _toolbar = item.querySelector('.toolbar');
                                if(_toolbar){                                    
                                    _toolbar.remove();
                                }
                            console.log(item);
                            let pre = item.querySelector('pre');
                            console.log(pre);
                            pre.prepend(arrToolbar[0]);
                            arrToolbar[0] = [];  
                        } else if(preList.length > 1){
                            preList.forEach(function(preItem){
                                console.log(preList.length);
                                arrToolbar = [];
                                arrToolbar[0] = document.createElement('button');
                                arrToolbar[0].classList.add('btn');
                                arrToolbar[0].classList.add('btn-outline-secondary');
                                arrToolbar[0].classList.add('btn-copy-code');
                                arrToolbar[0].innerHTML = 'Copy';
                                    arrToolbar[0].addEventListener('click',function(e){
                                        e.target.innerText = 'Copied';
                                        setTimeout(() => {
                                            e.target.innerText = 'Copy';                                                                
                                        }, 700);
                                        let elemento = preItem.querySelector('code');
                                        selecionaTexto(elemento);
                                    });
                                let _toolbar = item.querySelector('.toolbar');
                                    if(_toolbar){                                    
                                        _toolbar.remove();
                                    }
                                console.log(item);
                                console.log(preList);
                                console.log(preItem);
                                preItem.prepend(arrToolbar[0]);
                                arrToolbar[0] = [];
                            });
                        }                          
                    }
                });                   
            }, 250);
    }   