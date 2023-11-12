const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");
const buttonsSpells = document.querySelectorAll(".button-spell");
const spellDesc = document.querySelectorAll(".descText");
const spellDescContainer = document.querySelectorAll(".spellDescription");




//forEach para capturar eventos dos botões



// //forEach para capturar eventos dos botões de spells
// buttonsSpells.forEach((buttonSpell, indice) =>{
//   buttonSpell.addEventListener("click", ()=>{

//     desselectButtonSpells();
//     buttonSpell.classList.add("selected");
//     let numButton = indice;
//     console.log(numButton)
//   });
// });


function desselectButtonSpells() {
  buttonsSpells.forEach((buttonS, indice) => {
    buttonS.classList.remove("selected");
  });
}

// function mostrarDescricao(numButton) {
//   // Esconde todas as divs de descrição
//   let divsDescricao = document.getElementsByClassName('spellDescription');
//   for (let i = 0; i < divsDescricao.length; i++) {
//     divsDescricao[i].style.display = 'none';
//   }

//   // Mostra a div de descrição correspondente ao botão clicado
//   let descricaoAtual = document.getElementById('Description' + numButton);
//   descricaoAtual.style.display = 'flex';
// }

// ...


buttonsSpells.forEach((buttonSpell, indice) => {
  buttonSpell.addEventListener("click", () => {
    
    buttonSpell.classList.add("selected");
    
    desselectButtonSpells();
    mostrarDescricao(indice);
  });
});



function mostrarDescricao(numButton) {

  
  let descricaoAtual = document.getElementById('Description');
  descricaoAtual.style.display = 'flex';


  let descText = document.querySelector('.descText');
  descText.textContent = obterInformacoesFeitico(numButton);
  let info = document.querySelector('.info');
  info.textContent = ObterOutrasInfosFeitico(numButton);
}

function obterInformacoesFeitico(numButton) {

  const informacoesFeitico = [
    "Blood Rage",
    "Challenge",
    "Berserk",
    "Fair Wound Cleansing",
    "Charge",
    "Energy Strike",
    "Magic Shield",
    "Ultimate Healing",
    "Strong Haste",
    "Rage of the Skies",
    "Divine Healing",
    "Divine Missile",
    "Sharpshooter",
    "Swift Foot",
    "Find Fiend",
    "Physical Strike",
    "Summon Creature",
    "Heal Friend",
    "Mass Healing",
    "Eternal Winter",

  ];
  return informacoesFeitico[numButton] || "Informações não disponíveis";
}

function ObterOutrasInfosFeitico(numButton) {

  const OutrasInfosFeitico = [
    "Por 10 segundos, aumenta em 35% o melee skill fist fighting, axe fighting, club fighting e sword fighting do usuário,enquanto zera a capacidade de bloquear criaturas armaduras ainda reduzem o dano recebido, Além disso, aumenta todo o dano recebido pelo usuário em 15%. Remove todos os efeitos da magia Protector.",
    "Chama a atenção das criaturas ao seu redor, fazendo com que passem a te atacar.",
    "Acerta todos os oponentes que estiverem em um dos 9 square meter contando o seu em volta ou embaixo do knight que a usar, causando dano físico. Caso esteja equipado com uma arma encantada, parte do dano da magia será dano mágico.",
    "Restaura uma porcentagem da vida do usuário a depender do seu 'Magic Level'.",
    "O seu personagem irá sofrer um aumento de 90% em sua velocidade por 5 segundos.",
    "Acerta o alvo causando dano elétrico.",
    "Todo dano sofrido durante o efeito desta magia será reduzido de sua Mana ao invés de seu HP. O Magic Shield absorve apenas uma quantidade limitada de dano antes de quebrar e quando esta magia se quebra, o efeito do feitiço desaparece.",
    "Cura uma quantidade grande de Vida.",
    "Aumenta a velocidade durante 22 segundos.",
    "Atinge 85 square meter contando o seu causando dano elétrico.",
    "Magia de cura usando poderes sagrados dos Paladins.",
    "Acerta o alvo causando dano sagrado.",
    "Aumenta o distance skill do Paladin em 40% por 10 segundos.",
    "Aumenta a velocidade dos Paladins em 80% por 10 segundos, porém, não é possível atacar ou usar qualquer magia de ataque.",
    "Diz a direção em que o monstro diabólico mais próximo está, em relação a você, e dá uma idéia de distância.",
    "Acerta o alvo causando dano físico.",
    "Invoca uma criatura para servi-lo.",
    "Cura o jogador alvo.",
    "Cura todos os jogadores e criaturas sumonadas em volta de quem a usa.",
    "Atinge 61 square meter contando o seu ao seu redor, causando dano de gelo.",
  ]
  return OutrasInfosFeitico[numButton] || "Informações não disponíveis";
}
buttons.forEach((button, indice) => {
  button.addEventListener("click", () => {

    desselectButton();
    desslectCharacter();


    button.classList.add("selected");
    characters[indice].classList.add("selected");


    let divsDescricao = document.querySelectorAll('.spellDescription');
    divsDescricao.forEach((descricao) => {
      descricao.style.display = 'none';
    });


  });
});


function desselectButton() {
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
}

function desslectCharacter() {
  characters.forEach((character) => {
    character.classList.remove("selected");
  });
}
