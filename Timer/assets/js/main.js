function criaHoraDosSegundos(seg) {
  const data = new Date(seg * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

document.addEventListener('click', function (e) {
  //console.log(e.target);
  const el = e.target;

  if (el.classList.contains('zerar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
  }

  if (el.classList.contains('pausar')) {
    clearInterval(timer);
    relogio.classList.add('pausado');
  }

  if (el.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    IniciaRelogio();
  }
});

function IniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos)
  }, 1000)
}




