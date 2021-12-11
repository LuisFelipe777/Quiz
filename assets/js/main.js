const alternativa = document.getElementById("alternativa");
const alternativaA = document.getElementById("letra-a");
const alternativaB = document.getElementById("letra-b");
const alternativaC = document.getElementById("letra-c");
const alternativaD = document.getElementById("letra-d");
const proximaQuestao = document.getElementById("btn-muda")
const alternativasClicadas = document.querySelectorAll("[id*=letra]")
const quiz = document.querySelector(".perguntas")
const mensagemResultado = document.querySelector(".mensagem-resultado")

let numero = 0;
let resultado = 0;
let valor;

alternativasClicadas.forEach(event => event.addEventListener("click", verificaCorreta));

const alternativas = [
  { pergunta: "1 - Quanto é 2 + 2?", 
    alternativaA: "9",
    alternativaB: "4",
    alternativaC: "3",
    alternativaD: "7",
    correta: "4"
   },
  { pergunta: "2 - Quanto é 4 + 2?", 
    alternativaA: "1",
    alternativaB: "6",
    alternativaC: "3",
    alternativaD: "5",
    correta: "6"
   }, 
  { pergunta: "3 - Quanto é 7 + 1?", 
    alternativaA: "2",
    alternativaB: "9",
    alternativaC: "1",
    alternativaD: "8",
    correta: "8"
   }, 
  { pergunta: "4 - Quanto é 4 + 13?", 
    alternativaA: "17",
    alternativaB: "4",
    alternativaC: "3",
    alternativaD: "9",
    correta: "17"
   },
  { pergunta: "5 - Quanto é 6 - 2?", 
    alternativaA: "3",
    alternativaB: "1",
    alternativaC: "9",
    alternativaD: "4",
    correta: "4"
   },
  { pergunta: "6 - Qual a raiz quadrada de 4?", 
    alternativaA: "2",
    alternativaB: "1",
    alternativaC: "8",
    alternativaD: "4",
    correta: "2"
   },
  { pergunta: "7 - Qual o proximo numero primo após 5?", 
    alternativaA: "1",
    alternativaB: "11",
    alternativaC: "9",
    alternativaD: "7",
    correta: "7"
   },
  { pergunta: "8 - Quanto é 4 / 1?", 
    alternativaA: "90",
    alternativaB: "3",
    alternativaC: "4",
    alternativaD: "9",
    correta: "4"
   },
  { pergunta: "9 - Qual o numero mais aproximado de pi?", 
    alternativaA: "7.8945",
    alternativaB: "4.14",
    alternativaC: "3.24",
    alternativaD: "3.14",
    correta: "3.14"
   },
  { pergunta: "10 - Quanto é 1000 * 3?", 
    alternativaA: "3000",
    alternativaB: "30",
    alternativaC: "300",
    alternativaD: "3333",
    correta: "3000"
   }
];

function limpaTela(){
  while(proximaQuestao.firstChild){
      proximaQuestao.removeChild(proximaQuestao.lastChild)
  }
}
const pressionaTecla = event =>{
   const pressionado = event.target;

        clicaOutraTecla();
        pressionado.classList.add("pressionada");
        limpaTela();
}

function botaoProximo(){
 
 document.querySelector("#btn-muda").removeAttribute("class", "btn-none");
}
const clicaOutraTecla = ()=>{

  alternativasClicadas.forEach(value => value.classList.remove("pressionada"));

}

const avancaClicaOutraTecla = ()=> {
atualizaDisplay();
alternativaA.classList.remove("pressionada");
alternativaB.classList.remove("pressionada");
alternativaC.classList.remove("pressionada");
alternativaD.classList.remove("pressionada");
}
const atualizaDisplay = ()=> {
alternativa.innerText = alternativas[numero].pergunta;
alternativaA.value = alternativas[numero].alternativaA;
alternativaB.value = alternativas[numero].alternativaB;
alternativaC.value = alternativas[numero].alternativaC;
alternativaD.value = alternativas[numero].alternativaD;
}
atualizaDisplay();
function verificaCorreta(event){
    pressionaTecla(event);
    if(alternativas[numero].correta === event.target.value ){
      valor = "correto"
      botaoProximo();
    }else{
      valor = "incorreto"
      botaoProximo();       
    }
}

const avancarQuestao = ()=>{
  if(valor === "correto"){
    resultado ++;
  }else{
    resultado + 0;
  }

  document.querySelector("#btn-muda").setAttribute("class", "btn-none")

  avancaClicaOutraTecla();

  numero++;

  if(numero < alternativas.length ){
    atualizaDisplay();
  }else{
    mostraResultado();
  }
}


function mostraResultado(){
  if(resultado > 7){
    passou();
  }else{
    reprovou();
  }
}

function passou(){

 const mensagemReacao =  document.getElementById("mensagem-reacao");
 const msgQtdAcerto = document.getElementById("msg-qtd-acerto");
 const img = document.getElementById("gif-resultado");

 mensagemReacao.innerText = "Parabéns (:";
 msgQtdAcerto.innerText = `Você acertou ${resultado}/${alternativas.length }`;
 img.src = "assets/img/alegria.gif";

 removeDisplay();

}

function reprovou(){


 const mensagemReacao =  document.getElementById("mensagem-reacao");
 const msgQtdAcerto = document.getElementById("msg-qtd-acerto");
 const img = document.getElementById("gif-resultado");

 mensagemReacao.innerText = "Que pena ):";
 msgQtdAcerto.innerText = `Você acertou ${resultado}/${alternativas.length }`;
 img.src = "assets/img/tristeza.gif";

 removeDisplay();

}

const removeDisplay = () => {
  quiz.classList.add("btn-none");
  mensagemResultado.classList.remove("btn-none");
}

function tentarNovamente () {

  numero = 0;
  resultado = 0;
  atualizaDisplay();
  quiz.classList.remove("btn-none");
  mensagemResultado.classList.add("btn-none");


}