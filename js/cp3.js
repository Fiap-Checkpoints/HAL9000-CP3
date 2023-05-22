
// GRUPO VALIDAÇAO DO FORMULARIO TEXTUAL

const inputNome = document.querySelector("#idNome");
const inputSobrenome = document.querySelector("#idSobrenome");
const inputEmail = document.querySelector("#idEmail");
const inputSenha = document.querySelector("#idSenha");
const inputSenha2 = document.querySelector("#idConfirmSenha");

const erroNome = document.querySelector("#idErrorNome");
const erroSobrenome = document.querySelector("#idErrorSobrenome");
const erroEmail = document.querySelector("#idErrorEmail");
const erroSenha = document.querySelector("#idErrorSenha");
const erroSenha2 = document.querySelector("#idErrorConfirmSenha");


inputNome.addEventListener("blur", ()=>{
  let textoNome = inputNome.value;
  if (textoNome == "") {
      erroNome.setAttribute("style", "visibility: visible; color: red;");
      erroNome.textContent = "* O nome não pode estar vazio!"
      inputNome.setAttribute("style", "outline-color: red;");
    } else{
      if(textoNome.length < 5){
        erroNome.setAttribute("style", "visibility: visible; color: red;");
        erroNome.textContent = "* O nome precisa ter 5 ou mais caracteres!"  
        inputNome.setAttribute("style", "outline-color: red;");
      }else{
          erroNome.textContent = ""
          erroNome.setAttribute("style", "visibility: hidden; color: green;");
          inputNome.setAttribute("style", "outline-color: green;");
      }
    }
});

inputSobrenome.addEventListener("blur", ()=>{
  let textoSobreNome = inputSobrenome.value;
  if (textoSobreNome == "") {
    erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
    erroSobrenome.textContent = "* O sobrenome não pode estar vazio!"
    inputSobrenome.setAttribute("style", "outline-color: red;");
    } else{
      if(textoSobreNome.length < 5){
        erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
        erroSobrenome.textContent = "* O sobrenome precisa ter 5 ou mais caracteres!"  
        inputSobrenome.setAttribute("style", "outline-color: red;");
      }else{
          erroSobrenome.textContent = ""
          erroSobrenome.setAttribute("style", "visibility: hidden; color: green;");
          inputSobrenome.setAttribute("style", "outline-color: green;");
      }
    }
});

inputEmail.addEventListener("blur", ()=>{
  let textoEmail = inputEmail.value;
  if (textoEmail == "") {
      erroEmail.setAttribute("style", "visibility: visible; color: red;");
      erroEmail.textContent = "* O e-mail não pode estar vazio!"
      inputEmail.setAttribute("style", "outline-color: red;");
    } else{
      if(textoEmail.length < 5){
        erroEmail.setAttribute("style", "visibility: visible; color: red;");
        erroEmail.textContent = "* O e-mail precisa ter 5 ou mais caracteres!";
        inputEmail.setAttribute("style", "outline-color: red;");
      }else{
        if (textoEmail.includes("@")) {
          erroEmail.textContent = ""
          erroEmail.setAttribute("style", "visibility: hidden; color: green;");
          inputEmail.setAttribute("style", "outline-color: green;");
          } else {
            erroEmail.setAttribute("style", "visibility: visible; color: red;");
            erroEmail.textContent = "* O e-mail precisa ser um e-mail válido (Conter @)!" 
            inputEmail.setAttribute("style", "outline-color: red;");
          }
      }   
  }
});

inputSenha.addEventListener("blur", ()=>{
  let textoSenha = inputSenha.value;
  if (textoSenha == "") {
    erroSenha.setAttribute("style", "visibility: visible; color: red;");
    erroSenha.textContent = "* A senha não pode estar vazia!"
    inputSenha.setAttribute("style", "outline-color: red;");
    } else{
      if(textoSenha.length < 6 || texto.length > 8){
        erroSenha.setAttribute("style", "visibility: visible; color: red;");
        erroSenha.textContent = "* A senha precisa ter de 6 a 8 caracteres"  
        inputSenha.setAttribute("style", "outline-color: red;");
      }else{
        erroSenha.textContent = ""
        erroSenha.setAttribute("style", "visibility: hidden; color: green;");
        inputSenha.setAttribute("style", "outline-color: green;");
      }
    }
});

inputSenha2.addEventListener("blur", ()=>{
  let textoSenha2 = inputSenha2.value;
  if (textoSenha2 == inputSenha.value){
    erroSenha2.textContent = ""
    erroSenha2.setAttribute("style", "visibility: hidden; color: green;");
    inputSenha2.setAttribute("style", "outline-color: green;");
  }
  else{
    erroSenha2.setAttribute("style", "visibility: visible; color: red;");
    erroSenha2.textContent = "* As senhas precisam ser iguais!"
    inputSenha2.setAttribute("style", "outline-color: red;");
  }
});

// GRUPO DARK MODE

const labelDarkMode = document.querySelectorAll("Label");
const aDarkmode = document.querySelector("a");
const cadastroDarkMode = document.querySelector(".form-cadastro");
const btnDark = document.querySelector("#btnDark");
const legendCadastro = document.querySelector(".text-cadastro")

btnDark.addEventListener("click",function(event){
  event.preventDefault();
  if(btnDark.textContent == "DarkMode"){
    btnDark.textContent = "LightMode"
    cadastroDarkMode.setAttribute("style","background-color:black")
    legendCadastro.style.color = "white";
    aDarkmode.style.color = "white";
    for (var i = 0; i < labelDarkMode.length;i++){
      labelDarkMode[i].style.color = "white";
    }
  }else{
    btnDark.textContent = "DarkMode"
    cadastroDarkMode.setAttribute("style","background-color:white")
    legendCadastro.style.color = "#002344";
    aDarkmode.style.color = "#002344";
    for (var i = 0; i < labelDarkMode.length;i++){
      labelDarkMode[i].style.color = "#002344";
    }
  }
});

// GRUPO DE VALIDAÇÃO DE FORMULÁRIO
// Faz as validações de todos os campos no momento que o formulário é enviado

const btnEnvia = document.querySelector("#btnSubmit")


btnEnvia.addEventListener("click", function(event){
  event.preventDefault();
let textao = "";
  let texto = inputEmail.value;
  if (texto == "") {
      erroEmail.setAttribute("style", "visibility: visible; color: red;");
      erroEmail.textContent = "* O e-mail não pode estar vazio!";
      textao += "* O e-mail não pode estar vazio\n"
      inputEmail.setAttribute("style", "outline-color: red;");
    } else{
      if(texto.length < 5){
        erroEmail.setAttribute("style", "visibility: visible; color: red;");
        erroEmail.textContent = "* O e-mail precisa ter 5 ou mais caracteres!";
        textao += "* O e-mail precisa ter 5 ou mais caracteres!\n"
        inputEmail.setAttribute("style", "outline-color: red;");
      }else{
        if (texto.includes("@")) {
          erroEmail.textContent = ""
          erroEmail.setAttribute("style", "visibility: hidden; color: green;");
          inputEmail.setAttribute("style", "outline-color: green;");
          } else {
            erroEmail.setAttribute("style", "visibility: visible; color: red;");
            erroEmail.textContent = "* O e-mail precisa ser um e-mail válido (Conter @)!" 
            textao += "* O e-mail precisa ser um e-mail válido (Conter @)!\n"
            inputEmail.setAttribute("style", "outline-color: red;");
          }
      }   
  }

  texto = inputNome.value;
  if (texto == "") {
      erroNome.setAttribute("style", "visibility: visible; color: red;");
      erroNome.textContent = "* O nome não pode estar vazio!"
      textao += "* O nome não pode estar vazio!\n"
      inputNome.setAttribute("style", "outline-color: red;");
    } else{
      if(texto.length < 5){
        erroNome.setAttribute("style", "visibility: visible; color: red;");
        erroNome.textContent = "* O nome precisa ter 5 ou mais caracteres!"  
        textao += "* O nome não pode estar vazio!\n"
        inputNome.setAttribute("style", "outline-color: red;");
      }else{
          erroNome.textContent = ""
          erroNome.setAttribute("style", "visibility: hidden; color: green;");
          inputNome.setAttribute("style", "outline-color: green;");
      }
    }

  texto = inputSobrenome.value;
  console.log(texto)
  if (texto == "") {
    erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
    erroSobrenome.textContent = "* O sobrenome não pode estar vazio!"
    textao += "* O sobrenome não pode estar vazio!\n"
    inputSobrenome.setAttribute("style", "outline-color: red;");
    } else{
      if(texto.length < 5){
        erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
        erroSobrenome.textContent = "* O sobrenome precisa ter 5 ou mais caracteres!"  
        textao += "* O sobrenome precisa ter 5 ou mais caracteres!\n"
        inputSobrenome.setAttribute("style", "outline-color: red;");
      }else{
          erroSobrenome.textContent = ""
          erroSobrenome.setAttribute("style", "visibility: hidden; color: green;");
          inputSobrenome.setAttribute("style", "outline-color: green;");
      }
    }

    texto = inputSenha.value;
    if (texto == "") {
      erroSenha.setAttribute("style", "visibility: visible; color: red;");
      erroSenha.textContent = "* A senha não pode estar vazia!"
      textao += "* A senha não pode estar vazia!\n"
      inputSenha.setAttribute("style", "outline-color: red;");
      } else{
        if(texto.length < 6 || texto.length > 8){
          erroSenha.setAttribute("style", "visibility: visible; color: red;");
          erroSenha.textContent = "* A senha precisa ter de 6 a 8 caracteres"  
          textao += "* A senha precisa ter de 6 a 8 caracteres\n"
          inputSenha.setAttribute("style", "outline-color: red;");
        }else{
          erroSenha.textContent = ""
          erroSenha.setAttribute("style", "visibility: hidden; color: green;");
          inputSenha.setAttribute("style", "outline-color: green;");
        }
      }

      texto = inputSenha2.value;
      if (texto == inputSenha.value){
        erroSenha2.textContent = ""
        erroSenha2.setAttribute("style", "visibility: hidden; color: green;");
        inputSenha2.setAttribute("style", "outline-color: green;");
      }
      else{
        erroSenha2.setAttribute("style", "visibility: visible; color: red;");
        erroSenha2.textContent = "* As senhas precisam ser iguais!"
        textao += "* As senhas precisam ser iguais!\n"
        inputSenha2.setAttribute("style", "outline-color: red;");
      }
      if (textao == ""){
  alert("Cadastro realizado com sucesso")
      }else{
        alert(textao);
      }
});