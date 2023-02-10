const obj = [
    {
        categoria: 'CSS',
        trilha: {
            nome: "Introdução ao Css 1",
            aulas:
            [
                'Introdução ao Css 1 - Aula 1',
                'Introdução ao Css 1 - Aula 2',
                'Introdução ao Css 1 - Aula 3'
            ]
        }
    },
    {
        categoria: 'CSS',
        trilha: {
            nome: "Introdução ao Css 2",
            aulas:
            [
                'Introdução ao Css 2 - Aula 1',
                'Introdução ao Css 2 - Aula 2',
                'Introdução ao Css 2 - Aula 3'
            ]
        }
    },
    {
        categoria: 'CSS',
        trilha: {
            nome: "Introdução ao Css 3",
            aulas:
            [
                'Introdução ao Css 3 - Aula 1',
                'Introdução ao Css 3 - Aula 2',
                'Introdução ao Css 3 - Aula 3'
            ]
        }
    },
    {
        categoria: 'HTML',
        trilha: {
            nome: "Introdução ao Html 1",
            aulas:
            [
                'Introdução ao Html 1 - Aula 1',
                'Introdução ao Html 1 - Aula 2',
                'Introdução ao Html 1 - Aula 3'
            ]
        }
    },
    {
        categoria: 'HTML',
        trilha: {
            nome: "Introdução ao Html 2",
            aulas:
            [
                'Introdução ao Html 2 - Aula 1',
                'Introdução ao Html 2 - Aula 2',
                'Introdução ao Html 2 - Aula 3'
            ]
        }
    }
]



  //  const _h3MenuSection = document.querySelector('#sidebar-menu .menu_section h3');
   // const _linkTrilha = document.querySelector('#sidebar-menu .menu_section .side-menu a .trilha-title');
  //  _h3MenuSection.textContent = obj[0].categoria;
   // _h3MenuSection.style.backgraoundColor = 'red !important';
    //_linkTrilha.textContent = obj[0].trilha.nome;

    //const _xxxx = document.querySelectorAll('#sidebar-menu .menu_section .side-menu li .child_menu li a');
    const _sidebarMenu = document.querySelector('#sidebar-menu');
    //console.log(_xxxx.length);
    //console.log(_xxxx[0]);

    let contador = 0;
    let string = '';

    for(item of obj[contador].trilha.aulas){

        string = `
                    <div class="menu_section">
        `;
    
        string = string + `
                    <h3>${obj[contador].categoria}</h3>
        `;

        string = string + `        
            <ul class="nav side-menu">
                <li><a><i class="fa fa-bug"></i> ${obj[contador].trilha.nome} <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
            `;
                        obj[contador].trilha.aulas.forEach(function(aula){
                            string = string + `
                            <li><a href="">${aula}</a></li>
                            `;
                        });
        string = string + `            
                    </ul>
                </li>  
            </ul> 
            `;
    
        string = string + `
            </div>
        `;
    }

    _sidebarMenu.innerHTML = string;
