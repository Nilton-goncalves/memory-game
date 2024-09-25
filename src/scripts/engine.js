const emojis = [
    '<img src="./src/images/c_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/c_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/css_logo.png" alt="card da linguagem css">',
    '<img src="./src/images/css_logo.png" alt="card da linguagem css">',
    '<img src="./src/images/html_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/html_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/java_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/java_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/javascript_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/javascript_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/python_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/python_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/ruby_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/ruby_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/Typescript_logo.png" alt="card da linguagem c#">',
    '<img src="./src/images/Typescript_logo.png" alt="card da linguagem c#">',
]; 
// guarda as cartas que formos abrindo
let openCards = []; 

//Pegando informações do cronômetro
const countdownElement = document.getElementById('timer');
let seconds = 60;


//Função que define o cronômetro
function updateCountdown() {
    // Verificando se ainda restam segundos
    if (seconds >= 0) {
      countdownElement.textContent = seconds;
      seconds--;
      setTimeout(updateCountdown, 1000); // Chamando a função novamente após 1 segundo
    } else{
        window.location.reload(true);
        alert ("Tempo esgotado!") // Mensagem quando o tempo acabar 
    }

  }

// embaralhador dos emojis -> .sort - permite ordenação, se o número aleatório (random)for maior que 0.5 dá peso 2 para o elemento, colocando-o na frente, senão dá peso -1 enviando para trás.
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1)); 


// Desenha elementos na tela. Cria uma div chamada box e dá a classe criada no css (item) e pega um emoji aleatório para usar (innerHtml) e o "pendura" no elemento principal (game)
for (let i = 0; i <emojis.length; i++) {
    let box = document.createElement ("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector (".game").appendChild(box);
} 
function handleClick (){
    if (openCards.length < 2 ){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500)
    }
} 

function handleClick() {
    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      openCards.push(this);
    }
  
    if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  
    console.log(openCards);
  }
  
  function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
  
    openCards = [];
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        window.location.reload(true);
        alert("Você venceu !");
    }
}

updateCountdown()