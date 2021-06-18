let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';


function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';
    
  // let quadrado = document.createElement('div');
  // let quadrados = document.createElement('div');
  // quadrado.classList.add('numero');
  // quadrado.classList.add('pisca');
  // quadrados.appendChild(quadrado);
  // quadrado.classList.remove('pisca');

  for (let i = 0; i < etapa.numeros ; i++) {
    if( i === 0 ){
      numeroHtml += '<div class="numero pisca"></div>';
    } else {
      numeroHtml += '<div class="numero"></div>';
    }
    //quadrados.appendChild(quadrado);
  }
  
  seuVotoPara.style.display = 'none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display = 'none';
  lateral.innerHTML = '';
  numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
  
}

function clicou(n) {
  let elementoNumero = document.querySelector('.numero.pisca');

  if ( elementoNumero !== null){
    elementoNumero.innerHTML = n;
    numero = `${numero}${n}`;
    elementoNumero.classList.remove('pisca');
    if ( elementoNumero.nextElementSibling != null){
      elementoNumero.nextElementSibling.classList.add('pisca');
    } else {
      atualizaInterface();
    }
  }
}

function branco() {
  
}

function corrige() {
  
}

function confirma() {
  
}

comecarEtapa();