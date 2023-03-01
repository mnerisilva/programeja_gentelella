console.log('carregou index.js');
const _containerRegistreSe = document.querySelector('.container-registre-se');
const _formRegistreSe = document.querySelector('.form-registre-se');
const _formEsqueceuASenha = document.querySelector('#form_esqueceu_a_senha');
const _spinRegistrese = document.querySelector('.spin-registrese');
const _containerRegistreSeComSucesso = document.querySelector('.container-registrouse-com-sucesso');
const _registreSeForm = document.querySelector('#registre_se');
const _registreSeButton = document.querySelector('#registre_se_button');
const _registreSeClose = document.querySelector('.registre-se-close');
const _registrouseComSucessoClose = document.querySelector('.registrouse-com-sucesso-close');
const _btnCancelarRegistro = document.querySelector('.btn-cancelar-registro');
const _btnLimparCamposRegistro = document.querySelector('.btn-limpar-registro');
const _btnSalvarRegistro = document.querySelector('.btn-salvar-registro');
const _mensagemSucessoNoRegistro = document.querySelector('.mensagem-sucesso-no-registro');
const _esqueciASenha = document.querySelector('.esqueci-a-senha');
const _containerEsqueciASenha = document.querySelector('.container-esqueci-a-senha');
const _containerEsqueceuASenha = document.querySelector('.container-esqueceu-a-senha');
const _esqueciASenhaClose = document.querySelector('.esqueci-a-senha-close');
const _esqueceuASenhaClose = document.querySelector('.esqueceu-a-senha-close');
const _alertUserExist = document.querySelector('.alert-user-exist');
const _inputEmaiEsqueciMinhaSenha = document.querySelector('input[name="email-esqueceu-a-senha"]');
const _buttonEsqueceuASenha = document.querySelector('.button-esqueceu-a-senha');
const _containerButtonInput = document.querySelector('.container-button-input');
const _regEmail         = document.querySelector('#reg_email');
const _regName          = document.querySelector('#reg_name');
const _regWhatsapp      = document.querySelector('#reg_whatsapp');
const _regLogradouro    = document.querySelector('#reg_logradouro');
const _regNumero        = document.querySelector('#reg_numero');
const _regComplemento   = document.querySelector('#reg_complemento');
const _regBairro        = document.querySelector('#reg_bairro');
const _regCidade        = document.querySelector('#reg_cidade');
const _regUf            = document.querySelector('#reg_uf');
const _regCep           = document.querySelector('#reg_cep');
const _regIdade         = document.querySelector('#reg_idade');
const _regPix           = document.querySelector('#reg_pix');
const _regSexo           = document.querySelector('#reg_sexo');
const _regCpf           = document.querySelector('#reg_cpf');
const _mailError = document.querySelector('.mail-error')

console.log(_formEsqueceuASenha);

















_registreSeButton.addEventListener('click', function(){
    console.log('clicou no botão registre-me!!');
    _containerRegistreSe.style.left = 0;
    _containerRegistreSe.style.transitionDelay = '2s';
    _registreSeForm.classList.add('mostra-registre-se'); 
});

_registreSeClose.addEventListener('click', function(){
    console.log('clicou no registre-se-close');
    limpaCamposFormRegistro();
    _alertUserExist.style.opacity = 0;
    _containerRegistreSe.style.left = -2000+'px';    
});

_registrouseComSucessoClose.addEventListener('click', function(){
    console.log('clicou no registre-se-close');
    limpaCamposFormRegistro();
    _alertUserExist.style.opacity = 0;
    _containerRegistreSe.style.left = -2000;   
    _containerRegistreSeComSucesso.style.left = -2000+'px';    
});

_btnCancelarRegistro.addEventListener('click', function(){
    console.log('clicou no registre-se-close');
    limpaCamposFormRegistro();
    _alertUserExist.style.opacity = 0;
    _containerRegistreSe.style.left = -2000+'px';    
});

_esqueciASenha.addEventListener('click', function(){
    console.log('clicou no esquici a senha');
    _containerEsqueceuASenha.style.left = 0;
    _containerEsqueceuASenha.style.transitionDelay = '2s';
    _containerEsqueceuASenha.classList.add('mostra-registre-se');
});

_esqueceuASenhaClose.addEventListener('click', function(){
    console.log('clicou no registre-se-close');
    _containerEsqueceuASenha.style.left = -2000+'px';    
});


$(_registreSeForm).submit(function(event){
    event.preventDefault();
    console.log('enviou formulário');
    let _nome = document.querySelector('#reg_name').value;
    let _email = document.querySelector('#reg_email').value;
    let _sexo = document.querySelector('#reg_sexo').value;
    let _whatsapp = document.querySelector('#reg_whatsapp').value;
    let _logradouro = document.querySelector('#reg_logradouro').value;
    let _numero = document.querySelector('#reg_numero').value;
    let _complemento = document.querySelector('#reg_complemento').value;
    let _cep = document.querySelector('#reg_cep').value;
    let _bairro = document.querySelector('#reg_bairro').value;
    let _cidade = document.querySelector('#reg_cidade').value;
    let _uf = document.querySelector('#reg_uf').value;
    let _cpf = document.querySelector('#reg_cpf').value;
    let _idade = document.querySelector('#reg_idade').value;
    let _pix = document.querySelector('#reg_pix').value;
    console.log(_email);
    console.log( _nome);
    console.log(_whatsapp);
            let formData = {
                reg_email: _email,
                reg_name: _nome,
                reg_sexo: _sexo,
                reg_whatsapp: _whatsapp,
                reg_logradouro: _logradouro,
                reg_numero: _numero,
                reg_complemento: _complemento,
                reg_cep: _cep,
                reg_bairro: _bairro,
                reg_cidade: _cidade,
                reg_uf: _uf,
                reg_cpf: _cpf,
                reg_idade: _idade,
                reg_pix: _pix
            };
            $.ajax({
                type: "POST",
                url: "php/backend/cadastra_usuario.php",
                data: formData,
                dataType: "json",
                encode: true,
                beforeSend: function(){
                    //_containerRegistreSe.style.opacity = .3;
                    _containerRegistreSe.style.pointerEvent = 'none';
                    _spinRegistrese.style.left = 0;
                    _spinRegistrese.classList.add('wait-spin');
                    _formRegistreSe.classList.add('esmaece-form-registre-se');
                    desabilitaCamposRegistrese();
                    _registreSeClose.style.pointerEvents = 'none';
                },
                success: function(data){
                    console.log('HHHHHHHHHHHHHH '+data._status[0]);
                    if(data._status[0] == 1){
                    _containerRegistreSe.style.opacity = 1;
                    _containerRegistreSe.style.pointerEvent = 'all';
                    _spinRegistrese.style.left = `${-2300}px`;
                        console.log('usuário já cadastrado');
                        _alertUserExist.style.opacity = 1;
                        _regEmail.classList.add('reg_mail');
                        let __name = _regEmail.value;
                        _regEmail.value = '* '+__name;  
                        
                        
                        _spinRegistrese.style.left = `${-2300}px`;
                        _spinRegistrese.classList.remove('wait-spin');
                        _formRegistreSe.classList.remove('esmaece-form-registre-se');
                        _registreSeClose.style.pointerEvents = 'all'; 
                        habilitaCamposRegistrese();


                    } else {
                        console.log('ENTROU AQUI!!!');
                        //_containerRegistreSeComSucesso.style.trasitionDelay = '.2s';
                        _containerRegistreSeComSucesso.style.left = 0;
                        console.log('usuário AINDA NÃO');                        
                        _spinRegistrese.style.left = `${-2300}px`;
                        _spinRegistrese.classList.remove('wait-spin');
                        _formRegistreSe.classList.remove('esmaece-form-registre-se');
                        _registreSeClose.style.pointerEvents = 'all';
                        _registreSeForm.classList.remove('mostra-registre-se'); 
                        habilitaCamposRegistrese();                  
                    }
                }});

});

_btnLimparCamposRegistro.addEventListener("click", function(){
    limpaCamposFormRegistro();
    _alertUserExist.style.opacity = 0;    
    _regEmail.classList.remove('reg_mail');
});



function limpaCamposFormRegistro() {
    _regEmail.value = '';
    _regName.value = '';
    _regWhatsapp.value = '';
    _regLogradouro.value = '';
    _regNumero.value = '';
    _regComplemento.value = '';
    _regBairro.value = '';
    _regCidade.value = '';
    _regUf.value = '';
    _regCep.value = '';
    _regIdade.value = '';
    _regPix.value = '';
    _regSexo.value = '';
    _regCpf.value = '';
}




function desabilitaCamposRegistrese(){
    _btnCancelarRegistro.setAttribute('disabled', true);
    _btnLimparCamposRegistro.setAttribute('disabled', true);  
    _btnSalvarRegistro.setAttribute('disabled', true);
    _alertUserExist.style.pointerEvents = 'none';
    _regEmail.style.pointerEvents = 'none';
    _regName.style.pointerEvents = 'none';
    _regWhatsapp.style.pointerEvents = 'none'; 
    _regLogradouro.style.pointerEvents = 'none';
    _regNumero.style.pointerEvents = 'none';
    _regComplemento.style.pointerEvents = 'none';
    _regBairro.style.pointerEvents = 'none';
    _regCidade.style.pointerEvents = 'none';
    _regUf.style.pointerEvents = 'none';
    _regCep.style.pointerEvents = 'none';
    _regIdade.style.pointerEvents = 'none';
    _regPix.style.pointerEvents = 'none';
    _regSexo.style.pointerEvents = 'none';
    _regCpf.style.pointerEvents = 'none';

     
    _alertUserExist.style.cursor = 'default';
    _regEmail.style.cursor = 'default';
    _regName.style.cursor = 'default';
    _regWhatsapp.style.cursor = 'default'; 
    _regLogradouro.style.cursor = 'default';
    _regNumero.style.cursor = 'default';
    _regComplemento.style.cursor = 'default';
    _regBairro.style.cursor = 'default';
    _regCidade.style.cursor = 'default';
    _regUf.style.cursor = 'default';
    _regCep.style.cursor = 'default';
    _regIdade.style.cursor = 'default';
    _regPix.style.cursor = 'default';
    _regSexo.style.cursor = 'default';
    _regCpf.style.cursor = 'default';

     
    _alertUserExist.style.userSelect = 'none';
    _regEmail.style.userSelect = 'none';
    _regName.style.userSelect = 'none';
    _regWhatsapp.style.userSelect = 'none'; 
    _regLogradouro.style.userSelect = 'none';
    _regNumero.style.userSelect = 'none';
    _regComplemento.style.userSelect = 'none';
    _regBairro.style.userSelect = 'none';
    _regCidade.style.userSelect = 'none';
    _regUf.style.userSelect = 'none';
    _regCep.style.userSelect = 'none';
    _regIdade.style.userSelect = 'none';
    _regPix.style.userSelect = 'none';
    _regSexo.style.userSelect = 'none';
    _regCpf.style.userSelect = 'none';
}



function habilitaCamposRegistrese(){
    _btnCancelarRegistro.removeAttribute('disabled');
    _btnLimparCamposRegistro.removeAttribute('disabled');  
    _btnSalvarRegistro.removeAttribute('disabled');
    _alertUserExist.style.pointerEvents = 'all';
    _regEmail.style.pointerEvents = 'all';
    _regName.style.pointerEvents = 'all';
    _regWhatsapp.style.pointerEvents = 'all'; 
    _regLogradouro.style.pointerEvents = 'all';
    _regNumero.style.pointerEvents = 'all';
    _regComplemento.style.pointerEvents = 'all';
    _regBairro.style.pointerEvents = 'all';
    _regCidade.style.pointerEvents = 'all';
    _regUf.style.pointerEvents = 'all';
    _regCep.style.pointerEvents = 'all';
    _regIdade.style.pointerEvents = 'all';
    _regPix.style.pointerEvents = 'all';
    _regSexo.style.pointerEvents = 'all';
    _regCpf.style.pointerEvents = 'all';

     
    _alertUserExist.style.cursor = 'text';
    _regEmail.style.cursor = 'text';
    _regName.style.cursor = 'text';
    _regWhatsapp.style.cursor = 'text'; 
    _regLogradouro.style.cursor = 'text';
    _regNumero.style.cursor = 'text';
    _regComplemento.style.cursor = 'text';
    _regBairro.style.cursor = 'text';
    _regCidade.style.cursor = 'text';
    _regUf.style.cursor = 'text';
    _regCep.style.cursor = 'text';
    _regIdade.style.cursor = 'text';
    _regPix.style.cursor = 'text';
    _regSexo.style.cursor = 'text';
    _regCpf.style.cursor = 'text';

     
    _alertUserExist.style.userSelect = 'text';
    _regEmail.style.userSelect = 'text';
    _regName.style.userSelect = 'text';
    _regWhatsapp.style.userSelect = 'text'; 
    _regLogradouro.style.userSelect = 'text';
    _regNumero.style.userSelect = 'text';
    _regComplemento.style.userSelect = 'text';
    _regBairro.style.userSelect = 'text';
    _regCidade.style.userSelect = 'text';
    _regUf.style.userSelect = 'text';
    _regCep.style.userSelect = 'text';
    _regIdade.style.userSelect = 'text';
    _regPix.style.userSelect = 'text';
    _regSexo.style.userSelect = 'text';
    _regCpf.style.userSelect = 'text';
}

const _onfocus = event => {
}

_inputEmaiEsqueciMinhaSenha.onfocus = function(){_mailError.style.opacity = 0;_inputEmaiEsqueciMinhaSenha.classList.remove('inputErrorBorder');};

            $(_formEsqueceuASenha).submit(function(event) {
                event.preventDefault();
                
                if(_inputEmaiEsqueciMinhaSenha.value == ''){
                    _mailError.textContent = '* email não pode ser nulo';        
                    _mailError.style.opacity = 1;
                    _inputEmaiEsqueciMinhaSenha.classList.add('inputErrorBorder');
                    return;
                }
                
                let _emailEsqueceuASenha = document.querySelector('#email-esqueceu-a-senha').value;
                console.log(_emailEsqueceuASenha);
                        let formData = {
                            _inputemailesqueceuasenha: _emailEsqueceuASenha
                        };
                            

                        $.ajax({
                            type: "POST",
                            url: "php/backend/email_esqueceu_senha.php",
                            data: formData,
                            dataType: "json",
                            encode: true,
                            beforeSend: function(){
                                _containerButtonInput.classList.add('desabilita');
                                _buttonEsqueceuASenha.setAttribute('disabled', 'disabled');
                                _spinRegistrese.style.left = 0;
                                _spinRegistrese.classList.add('wait-spin');
                                _formRegistreSe.classList.add('esmaece-form-registre-se');
                                desabilitaCamposRegistrese();
                                _registreSeClose.style.pointerEvents = 'none';
                                _inputEmaiEsqueciMinhaSenha.value = '';
                            },
                            success: function(data){
                                console.log('HHHHHHHHHHHHHH '+data._status[0]);
                                _containerRegistreSe.style.pointerEvent = 'all';
                                _spinRegistrese.style.left = -2000+'px';
                                _spinRegistrese.classList.remove('wait-spin');
                                _formRegistreSe.classList.remove('esmaece-form-registre-se');
                                habilitaCamposRegistrese();
                                _registreSeClose.style.pointerEvents = 'all';
                                _containerButtonInput.classList.remove('desabilita');
                                _buttonEsqueceuASenha.removeAttribute('disabled');




                                /*if(data._status[0] == 1){
                                _containerRegistreSe.style.opacity = 1;
                                _containerRegistreSe.style.pointerEvent = 'all';
                                _spinRegistrese.style.left = `${-2300}px`;
                                    console.log('usuário já cadastrado');
                                    _alertUserExist.style.opacity = 1;
                                    _regEmail.classList.add('reg_mail');
                                    let __name = _regEmail.value;
                                    _regEmail.value = '* '+__name;
                                    _spinRegistrese.style.left = `${-2300}px`;
                                    _spinRegistrese.classList.remove('wait-spin');
                                    _formRegistreSe.classList.remove('esmaece-form-registre-se');
                                    _registreSeClose.style.pointerEvents = 'all'; 
                                    habilitaCamposRegistrese();
                                } else {
                                    console.log('ENTROU AQUI!!!');
                                    _containerRegistreSeComSucesso.style.left = 0;
                                    console.log('usuário AINDA NÃO');                        
                                    _spinRegistrese.style.left = `${-2300}px`;
                                    _spinRegistrese.classList.remove('wait-spin');
                                    _formRegistreSe.classList.remove('esmaece-form-registre-se');
                                    _registreSeClose.style.pointerEvents = 'all';
                                    _registreSeForm.classList.remove('mostra-registre-se'); 
                                    habilitaCamposRegistrese();                  
                                }*/
                            }});                          
                            
                console.log("enviou o formulário");
                console.log(_inputEmaiEsqueciMinhaSenha);
            });




































$(_registreSeForm).submit(function(event){
    event.preventDefault();

});