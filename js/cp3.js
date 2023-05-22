
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

inputEmail.addEventListener("blur", ()=>{
    let texto = inputEmail.value;
    console.log(texto)
    if (texto == "") {
        erroEmail.setAttribute("style", "visibility: visible; color: red;");
        erroEmail.textContent = "* O e-mail não pode estar vazio!"
        alert("O e-mail não pode estar vazio!");
        inputEmail.setAttribute("style", "outline-color: red;");
      } else{
        if(texto.length < 5){
          erroEmail.setAttribute("style", "visibility: visible; color: red;");
          erroEmail.textContent = "* O e-mail precisa ter 5 ou mais caracteres!";
          alert("O e-mail precisa ter 5 ou mais caracteres!")
          inputEmail.setAttribute("style", "outline-color: red;");
        }else{
          if (texto.includes("@")) {
            erroEmail.textContent = ""
            erroEmail.setAttribute("style", "visibility: hidden; color: green;");
            inputEmail.setAttribute("style", "outline-color: green;");
            } else {
              erroEmail.setAttribute("style", "visibility: visible; color: red;");
              erroEmail.textContent = "* O e-mail precisa ser um e-mail válido (Conter @)!" 
              alert("O e-mail precisa ser um e-mail válido (Conter @)!");
              inputEmail.setAttribute("style", "outline-color: red;");
            }
        }   
    }
});

inputNome.addEventListener("blur", ()=>{
  let texto = inputNome.value;
  console.log(texto)
  if (texto == "") {
      erroNome.setAttribute("style", "visibility: visible; color: red;");
      erroNome.textContent = "* O nome não pode estar vazio!"
      alert("O nome não pode estar vazio!");
      inputNome.setAttribute("style", "outline-color: red;");
    } else{
      if(texto.length < 5){
        erroNome.setAttribute("style", "visibility: visible; color: red;");
        erroNome.textContent = "* O nome precisa ter 5 ou mais caracteres!"  
        alert("O nome precisa ter 5 ou mais caracteres!");
        inputNome.setAttribute("style", "outline-color: red;");
      }else{
          erroNome.textContent = ""
          erroNome.setAttribute("style", "visibility: hidden; color: green;");
          inputNome.setAttribute("style", "outline-color: green;");
      }
    }
});

inputSobrenome.addEventListener("blur", ()=>{
  let texto = inputSobrenome.value;
  console.log(texto)
  if (texto == "") {
    erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
    erroSobrenome.textContent = "* O sobrenome não pode estar vazio!"
    alert("O sobrenome não pode estar vazio!");
    inputSobrenome.setAttribute("style", "outline-color: red;");
    } else{
      if(texto.length < 5){
        erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
        erroSobrenome.textContent = "* O sobrenome precisa ter 5 ou mais caracteres!"  
        alert("O sobrenome precisa ter 5 ou mais caracteres!");
        inputSobrenome.setAttribute("style", "outline-color: red;");
      }else{
          erroSobrenome.textContent = ""
          erroSobrenome.setAttribute("style", "visibility: hidden; color: green;");
          inputSobrenome.setAttribute("style", "outline-color: green;");
      }
    }
});

inputSenha.addEventListener("blur", ()=>{
  let texto = inputSenha.value;
  if (texto == "") {
    erroSenha.setAttribute("style", "visibility: visible; color: red;");
    erroSenha.textContent = "* A senha não pode estar vazia!"
    alert("A senha não pode estar vazia!");
    inputSenha.setAttribute("style", "outline-color: red;");
    } else{
      if(texto.length < 6 || texto.length > 8){
        erroSenha.setAttribute("style", "visibility: visible; color: red;");
        erroSenha.textContent = "* A senha precisa ter de 6 a 8 caracteres"  
        alert("A senha precisa ter de 6 a 8 caracteres");
        inputSenha.setAttribute("style", "outline-color: red;");
      }else{
        erroSenha.textContent = ""
        erroSenha.setAttribute("style", "visibility: hidden; color: green;");
        inputSenha.setAttribute("style", "outline-color: green;");
      }
    }
});

inputSenha2.addEventListener("blur", ()=>{
  let texto = inputSenha2.value;
  if (texto == inputSenha.value){
    erroSenha2.textContent = ""
    erroSenha2.setAttribute("style", "visibility: hidden; color: green;");
    inputSenha2.setAttribute("style", "outline-color: green;");
  }
  else{
    erroSenha2.setAttribute("style", "visibility: visible; color: red;");
    erroSenha2.textContent = "* As senhas precisam ser iguais!"
    alert("As senhas precisam ser iguais!");
    inputSenha2.setAttribute("style", "outline-color: red;");
  }
});

// GRUPO DARK MODE

const Labeldarkmode = document.querySelectorAll("Label");
const aDarkmode = document.querySelector("a");
const CadastroDarkMode = document.querySelector(".form-cadastro");
const btnDark = document.querySelector("#btnDark");
const LegendCadastro = document.querySelector(".text-cadastro")

btnDark.addEventListener("click",function(event){
  event.preventDefault();
  if(btnDark.textContent == "DarkMode"){
    btnDark.textContent = "LightMode"
    CadastroDarkMode.setAttribute("style","background-color:black")
    LegendCadastro.style.color = "white";
    aDarkmode.style.color = "white";
    for (var i = 0; i < Labeldarkmode.length;i++){
      Labeldarkmode[i].style.color = "white";
    }
  }else{
    btnDark.textContent = "DarkMode"
    CadastroDarkMode.setAttribute("style","background-color:white")
    LegendCadastro.style.color = "#002344";
    aDarkmode.style.color = "#002344";
    for (var i = 0; i < Labeldarkmode.length;i++){
      Labeldarkmode[i].style.color = "#002344";
    }
  }
});