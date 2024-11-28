const imagensDoCarrossel = document.querySelector('.imagens-carrossel');
const totalDeSlides = imagensDoCarrossel.children.length;
const botaoAnterior = document.querySelector('.anterior');
const botaoProximo = document.querySelector('.proximo');
const indicadoresContainer = document.querySelector('.indicadores');
let indiceAtual = 0;

function criarIndicadores() {
  for (let i = 0; i < totalDeSlides; i++) {
    const indicador = document.createElement('div');
    indicador.classList.add('indicador');
    if (i === 0) indicador.classList.add('ativo');
    indicadoresContainer.appendChild(indicador);
    indicador.addEventListener('click', () => {
      indiceAtual = i;
      atualizarSlide();
    });
  }
}

function atualizarIndicadores() {
  const indicadores = document.querySelectorAll('.indicador');
  indicadores.forEach((indicador, index) => {
    if (index === indiceAtual) {
      indicador.classList.add('ativo');
    } else {
      indicador.classList.remove('ativo');
    }
  });
}

function atualizarSlide() {
  const offset = -indiceAtual * 800;
  imagensDoCarrossel.style.transform = `translateX(${offset}px)`;
  atualizarIndicadores();
}

function mostrarProximoSlide() {
  indiceAtual = (indiceAtual + 1) % totalDeSlides;
  atualizarSlide();
}

function mostrarSlideAnterior() {
  indiceAtual = (indiceAtual - 1 + totalDeSlides) % totalDeSlides;
  atualizarSlide();
}

botaoProximo.addEventListener('click', mostrarProximoSlide);
botaoAnterior.addEventListener('click', mostrarSlideAnterior);

setInterval(mostrarProximoSlide, 3000);

criarIndicadores();
