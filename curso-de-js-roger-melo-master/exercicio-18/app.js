/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
//começando do zero xD
const form = document.getElementById("form");
const username = document.getElementById("username");
const p = document.createElement("p");
const button = document.getElementById('button')

const pass_reg = /[a-zA-Z\d]{6,}$/;
// merda de regex

username.addEventListener("input", validate);

function validate(e) {
	let target = e.target;

	//como eu posso fazer o "p" ? se não existir o P adicionar o P se existir, ignorar
	if (username.nextSibling !== p) {
		username.insertAdjacentElement("afterend", p);
		p.innerText =
			"O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas";
	}

	if (pass_reg.test(target.value)) {
		target.classList.add("username-success-feedback");
		target.classList.remove("username-help-feedback");
    p.innerText = "Username válido =)"
	} else {
		target.classList.add("username-help-feedback");
		target.classList.remove("username-success-feedback");
	}
}


/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
  parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
  vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  */
 
 //verificar se a class do form está como sucess ao apertar submit
 //se sim, excluir o p, criar um p e adiciona-lo abaixo do botão com "dados enviados =)"
 
 form.addEventListener("submit", (e) => {
   e.preventDefault();
  if( username.classList.contains("username-success-feedback") ) {
    p.remove()
    button.insertAdjacentElement("afterend", p)
    p.classList.add("submit-success-feedback")
    p.innerText = "Dados enviados =)"
  } else {
    p.remove()
    button.insertAdjacentElement("afterend", p)
    p.classList.add("submit-help-feedback")
    p.innerText = "Por favor, insira um username válido"
  }


 });



/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/

const arr = [1 , 2 , 3, 0]

function newSome(value, condicao) {
  for (let i = 0; i < value.length; i++) {
    const element = value[i];
    if (element === 0) {
      return console.log(true)
    }
  }
  return console.log(false)
}
newSome(arr)