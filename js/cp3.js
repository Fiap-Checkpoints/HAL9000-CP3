const inputNome = document.querySelector("#");
const inputSobrenome = document.querySelector("#");
const inputEmail = document.querySelector("#");
const inputSenha = document.querySelector("#");
const inputSenha2 = document.querySelector("#");

const erroNome = document.querySelector("#");
const erroSobrenome = document.querySelector("#");
const erroEmail = document.querySelector("#");
const erroSenha = document.querySelector("#");
const erroSenha2 = document.querySelector("#");



inputEmail.addEventListener("blur", ()=>{
    let texto = inputEmail.value;
    if (input.value === "") {
        //Campo vazio
        erroNome.textContent = "* O email nao pode estar vazio"
      } else{
        if(texto.value.length < 5){
            erroNome.textContent = "* O email precisa ter 5 ou mais caracteres"  
        }
        if (texto.includes("@")) {
            console.log("O texto contém o caractere @");
            erroNome.textContent = "* O email precisa ser um email valido (Conter @)"  
          } else {
            //Campo sem @
            erroNome.textContent = ""
          }
      }



});

