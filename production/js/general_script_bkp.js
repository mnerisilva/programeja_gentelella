const obj = [
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
    }
]


    const elemento = document.createElement('h3');
    const _h3MenuSection = document.querySelector('#sidebar-menu .menu_section h3');
    const _linkTrilha = document.querySelector('#sidebar-menu .menu_section .side-menu a .trilha-title');
    _h3MenuSection.textContent = obj[0].categoria;
    _h3MenuSection.style.backgraoundColor = 'red !important';
    _linkTrilha.textContent = obj[0].trilha.nome;

    const _xxxx = document.querySelectorAll('#sidebar-menu .menu_section .side-menu li .child_menu li a');
    let _yyyy = document.querySelector('#sidebar-menu .menu_section .side-menu li');
    console.log(_xxxx.length);
    console.log(_xxxx[0]);
    console.log(obj[0].trilha.aulas.length);
    console.log(_xxxx);

    let contador = 0;
    obj[0].trilha.aulas.forEach(function(item){
        console.log('Item: '+item);
        //console.log(obj[contador].trilha.aulas.length);
        _xxxx[contador].textContent = item;
        contador = contador + 1;
    });
    _yyyy.append(elemento);
