const obj = [
    {
        categoria: 'HTML',
        trilha: {
            nome: "Introdução ao Html 1",
            aulas:
            [
                '10 ideias de projetos em HTML e CSS para adicionar no portfólio!',
                'A malas sem alça html',
                'APRENDA Html EM 10 MINUTOS',
                'Aprendendo o básico de html (web) | Web #1',
                'Html (Cascading Style Sheets) // Dicionário do Programador',
                'Html: Aprenda como Funciona a Estrutura CSS',
                'O QUE É HTML? (SELETORES, PROPRIEDADES E VALORES)'
            ]
        }
    }
]


    const elemento = document.createElement('h3');
    //const _h3MenuSection = document.querySelector('#sidebar-menu .menu_section h3');
    //const _linkTrilha = document.querySelector('#sidebar-menu .menu_section .side-menu a .trilha-title');
    //_h3MenuSection.textContent = obj[0].categoria;
    //_h3MenuSection.style.backgraoundColor = 'red !important';
    //_linkTrilha.textContent = obj[0].trilha.nome;

    //const _xxxx = document.querySelectorAll('#sidebar-menu .menu_section ul.side-menu li ul.child_menu li a');
    //let _yyyy = document.querySelector('#sidebar-menu .menu_section .side-menu li');
    //console.log(_xxxx.length);
    //console.log(_xxxx[0]);
    //console.log(obj[0].trilha.aulas.length);
    //console.log(_xxxx);

    let contador = 0;
    /*obj[0].trilha.aulas.forEach(function(item){
        console.log('Item: '+item);
        _xxxx[contador].textContent = item;
        contador = contador + 1;
    });
    _yyyy.append(elemento);*/

    let arr = [];
    let taglink = null;

    let localInserirH3 = document.querySelector('.menu_section'); // container H3
    let localInserir = document.querySelector('.side-menu'); // container do child_menu
    let localInserirItem = document.querySelector('.child_menu'); // container dos itens de menu

    let elementoOriginal = document.querySelector('.container-clone .li-a-clonar');
    let elementoOriginalH3 = document.querySelector('.h3-a-clonar h3');
    let elementoOriginalItem = document.querySelector('.item-a-clonar li');

    //for(let i=0;i<7;i++){
    for(item of obj){
        
            arr[0] = elementoOriginalH3.cloneNode(true);
            arr[0].innerText = item.categoria;
            localInserirH3.prepend(arr[0]);
            arr[0] = elementoOriginal.cloneNode(true);
            console.log(arr[0].innerText.trim());
            arr[0].querySelector('a span').innerText = ` ${item.trilha.nome} `;
            localInserir.prepend(arr[0]);
            arr = [];
            console.log(typeof item.trilha.aulas)
        for(element of item.trilha.aulas){
            localInserirItem = $('.side-menu').find('.child_menu:last');
            arr = [];
            console.log(elementoOriginalItem);
            arr[0] = elementoOriginalItem.cloneNode(true);
            console.log(arr[0]);
            arr[0].remove('a');
            //arr[0].innerText = element;
            localInserirItem.prepend(arr[0]);
            taglink = document.createElement('a');
            taglink.innerText = element;
            arr[0].appendChild(taglink);

            arr = [];           
        };
    }

    //localInserir.appendChild(elementoClone);
    //localInserir.insertAdjacentElement('afterbegin', elementoClone);
    //localInserir.insertAdjacentElement('beforebegin', elementoClone);





    /*localInserir.insertAdjacentElement('afterbegin', elementoClone);
    
    let elem = localInserir.querySelector('.li-a-clonar');
    elem.classList.remove('li-a-clonar');*/

























































































    /*,
    {
        categoria: 'CSS',
        trilha: {
            nome: "Introdução ao Css 1",
            aulas:
            [
                '10 ideias de projetos em HTML e CSS para adicionar no portfólio!',
                'A malas sem alça',
                'APRENDA CSS EM 10 MINUTOS',
                'Aprendendo o básico de html (web) | Web #1',
                'CSS (Cascading Style Sheets) // Dicionário do Programador',
                'CSS3: Aprenda como Funciona a Estrutura CSS',
                'O QUE É CSS? (SELETORES, PROPRIEDADES E VALORES)'
            ]
        }
    }*/