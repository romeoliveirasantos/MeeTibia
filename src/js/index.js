const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");
const buttonsSpells = document.querySelectorAll(".button-spell");
const spellDesc = document.querySelectorAll(".descText");
const spellDescContainer = document.querySelectorAll(".spellDescription");



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


//forEach para capturar eventos dos botões de spells
buttonsSpells.forEach((buttonSpell, indice) =>{
  buttonSpell.addEventListener("click", ()=>{

    desselectButtonSpells();
    desselectContainerDesc();
    buttonSpell.classList.add("selected");
  });
});


function desselectButtonSpells(){
  buttonsSpells.forEach((buttonS)=>{
    buttonS.classList.remove("selected");
  });
}




// // <div class="spellDescription">
// <p class="descText">3</p>
// </div>
