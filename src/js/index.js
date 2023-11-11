const buttons = document.querySelectorAll(".button");

const characters = document.querySelectorAll(".character");

//forEach para capturar eventos dos botões
buttons.forEach((button, indice) =>{
  button.addEventListener("click", ()=>{

    desselectButton();
    desslectCharacter();

    button.classList.add("selected");
    characters[indice].classList.add("selected");

  });
});


function desselectButton(){
  buttons.forEach((button)=>{
    button.classList.remove("selected");
  });
}

function desslectCharacter(){
  characters.forEach((character)=>{
    character.classList.remove("selected");
  });
}