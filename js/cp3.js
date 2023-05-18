const inputNome = document.querySelector("#");
const inputSobrenome = document.querySelector("#");
const inputEmail = document.querySelector("#");
const inputSenha = document.querySelector("#");
const inputSenha2 = document.querySelector("#");



inputEmail.addEventListener("blur", ()=>{
    let texto = inputEmail.value;
    if (input.value === "") {
        //Campo vazio
        console.log("O campo está vazio");
      } else{
        if (texto.includes("@")) {
            console.log("O texto contém o caractere @");
          } else {
            //Campo sem @
            console.log("O texto não contém o caractere @");
          }
      }
});

