let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';
  numero = "";
  votoBranco = false;
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
  console.log("Atualizando Interface");
  console.log(numero);
  let etapa = etapas[etapaAtual];

  let candidato = etapa.candidatos.filter((item)=>{
    if(item.numero === numero ){
      return true;
    } else {
      return false;
    }
  })

  if ( candidato.length > 0 ){
    candidato = candidato[0];
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`;
    let fotosHtml = '';

    for (const iterator of candidato.fotos) {
      fotosHtml += `<div class="d-1-image ${iterator.small ? 'small':''}"><img src="images/${iterator.url}" alt="" />${iterator.legenda}</div>`      
    }
    
    lateral.innerHTML = fotosHtml;
  } else {
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    descricao.innerHTML = `<div class="aviso--grande pisca">VOTO NULO</div>`;
  }
  console.log(candidato);
  
  
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
  if ( numero === '' ){
    votoBranco = true;

    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    descricao.innerHTML = `<div class="aviso--grande pisca">VOTO EM BRANCO</div>`;
    numeros.innerHTML = '';
  } else {
    alert("Para votar em BRANCO não pode ter digitado nenhum número!")
  }
}

function corrige() {
  comecarEtapa();
}

function confirma() {
  let etapa = etapas[etapaAtual];

  let votoConfirmado = false;

  if ( votoBranco ){
    votoConfirmado = true;
    votos.push({
      etapa: etapa.titulo,
      voto: 'branco'
    })
    console.log("Confirmando como branco");
  } else if ( numero.length === etapa.numeros ){
    votoConfirmado = true;
    console.log("Confirmando como " + numero);
    votos.push({
      etapa: etapa.titulo,
      voto: numero
    })
  }

  if ( votoConfirmado ){
    etapaAtual++;
    if (etapas[etapaAtual] !== undefined){
      comecarEtapa();
    } else {
      console.log("FIM");
      document.querySelector('.tela').innerHTML = `<div class="aviso--gigante pisca">FIM</div>`;
      console.log(votos);
      
    }
    
  }
}

comecarEtapa();