const inputNome = document.querySelector("#idNome");

const inputSobrenome = document.querySelector("#");

const inputEmail = document.querySelector("#idEmail");
// const inputSenha = document.querySelector("#");
// const inputSenha2 = document.querySelector("#");

const erroNome = document.querySelector("#idErrorNome");
const erroSobrenome = document.querySelector("#");
const erroEmail = document.querySelector("#idErrorEmail");
// const erroSenha = document.querySelector("#");
// const erroSenha2 = document.querySelector("#");



inputEmail.addEventListener("blur", ()=>{
    let texto = inputEmail.value;
    console.log(texto)
    if (texto == "") {
        //Campo vazio
        erroEmail.textContent = "* O email nao pode estar vazio"
        inputEmail.setAttribute("style", "outline-color: red;");
      } else{
        if(texto.length < 5){
          erroEmail.textContent = "* O email precisa ter 5 ou mais caracteres"  
          inputEmail.setAttribute("style", "outline-color: red;");
        }else{
          if (texto.includes("@")) {
            erroEmail.textContent = ""
            inputEmail.setAttribute("style", "outline-color: green;");
            } else {
              //Campo sem @
              console.log("O texto contém o caractere @");
              erroEmail.textContent = "* O email precisa ser um email valido (Conter @)" 
              inputEmail.setAttribute("style", "outline-color: red;");
            }
        }   
      }
});
inputNome.addEventListener("blur", ()=>{
  let texto = inputNome.value;
  console.log(texto)
  if (texto == "") {
      //Campo vazio
      erroNome.textContent = "* O nome nao pode estar vazio"
      inputNome.setAttribute("style", "outline-color: red;");
    } else{
      if(texto.length < 5){
        erroNome.textContent = "* O nome precisa ter 5 ou mais caracteres"  
        inputNome.setAttribute("style", "outline-color: red;");
      }else{
          erroNome.textContent = ""
          inputNome.setAttribute("style", "outline-color: green;");
      }
    }
});
