const obj = [
    {
        categoria: 'CSS',
        trilha: {
            nome: "Introdução ao Css",
            aulas:
            [
                'Aula 1 Css',
                'Aula 2 Css',
                'Aula 3 Css'
            ]
        }
    },
    {
        categoria: 'Html',
        trilha: {
            nome: "Introdução ao Html",
            aulas:
            [
                'Aula 1 Html',
                'Aula 2 Html',
                'Aula 3 Html'
            ]
        }
    }
]



    const _h3MenuSection = document.querySelector('#sidebar-menu .menu_section h3');
    const _linkTrilha = document.querySelector('#sidebar-menu .menu_section .side-menu a .trilha-title');
    _h3MenuSection.textContent = obj[0].categoria;
    _h3MenuSection.style.backgraoundColor = 'red !important';
    _linkTrilha.textContent = obj[0].trilha.nome;

    const _xxxx = document.querySelectorAll('#sidebar-menu .menu_section .side-menu li .child_menu li a');
    console.log(_xxxx.length);
    console.log(_xxxx[0]);

    let contador = 0;
    for(item of obj[contador].trilha.aulas){
        console.log(item);
        //console.log(obj[contador].trilha.aulas.length);
        _xxxx[contador].textContent = item;
        contador = contador + 1;
    }