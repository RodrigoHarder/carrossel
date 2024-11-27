const imagensDoCarrossel = document.querySelector('.imagens-carrossel');
const totalDeSlides = imagensDoCarrossel.children.length;
const botaoAnterior = document.querySelector('.anterior');
const botaoProximo = document.querySelector('.proximo');
let indiceAtual = 0;

function atualizarSlide() {
  const desvio = -indiceAtual * 800;
  imagensDoCarrossel.style.transform = `translateX(${desvio}px)`;
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
setInterval(mostrarProximoSlide, 5000);
