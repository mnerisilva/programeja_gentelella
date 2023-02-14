    const _formSalvaPost = document.querySelector('#form-salva-post');
    _formSalvaPost.classList.add('remove');
    


    const _menuToggle = document.querySelector('#menu_toggle');
    const _body = document.querySelector('body');
    _menuToggle.addEventListener('click', function(){
            _body.classList.toggle('nav-md');
            _body.classList.toggle('nav-sm');
    });
    const obje = [];


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
                obje[cont] = {categoria:item.abrev_categoria,  trilha: {nome: item.trilha_name, video: [{titulo: item.conteudo_descricao, codigoyt: item.conteudo_codigoyoutube}]}};
                trilhaAux = item.trilha_name;
                _cont = cont;
                cont++;
            } else if(item.trilha_name == trilhaAux){
                obje[_cont].trilha.video.push({titulo: item.conteudo_descricao, codigoyt: item.conteudo_codigoyoutube});
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
                arr[0].querySelector('a span').innerText = ` ${objeto.trilha.nome} `;
                child_menu = arr[0].querySelector('.child_menu');
                localInserir.append(arr[0]);
                arr = [];
                objeto.trilha.video.forEach(function(video){
                    arr[1] = LI_Item.cloneNode(true);
                    arr[1].querySelector('a').innerText = video.titulo;
                    arr[1].querySelector('a').setAttribute('data-codigoyt', video.codigoyt);
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
                //console.log(e.target.innerText, e.target.dataset.codigoyt);
                if(_formSalvaPost.classList.contains('remove')){
                    _formSalvaPost.classList.remove('remove');
                }
                _formSalvaPost.classList.remove('remove');
                carregaVideo(e.target.dataset.codigoyt, e.target.innerText);
            });
        });
    
    }, 20);

        
    }); 




//} 

    
    /*for(item of obj){  
            localInserirH3 = localInserir; 
            arr[0] = H3.cloneNode(true);
            arr[0].innerText = item.categoria;
            localInserirH3.append(arr[0]);
            arr = [];
            arr[0] = LI_trilha.cloneNode(true);
            arr[0].querySelector('a span').innerText = ` ${item.trilha.nome} `;
            localInserir.append(arr[0]);
            arr = [];
        for(element of item.trilha.aulas){
            localInserirItem = $('.side-menu').find('.child_menu:last-child');
            arr = [];
            arr[0] = LI_Item.cloneNode(true);
            arr[0].querySelector('a').innerText = element;
            arr[0].querySelector('a').setAttribute('href', 'index.html');
            localInserirItem.append(arr[0]);
            arr = [];           
        };
        console.log(item);
    }*/




















































































function tinymceCarregamento(){
     // TinyMCE
     tinymce.init({
        selector: '#editor1',
        menubar:false,
        language: 'pt_BR',
        placeholder: 'Insira aqui seu trecho de código',
        height: 200,
        branding: false,
        resize: true,
        plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount', 'codesample', 'fullscreen'
        ],
        toolbar_mode: 'sliding',
        toolbar1:'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist | ' +
        'removeformat | link image | outdent indent | help | fullscreen',
        toolbar2:'|   | codesample |   |',
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
























  


    
