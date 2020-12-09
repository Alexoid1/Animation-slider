const audi = new Audio();
audi.src = 'sonidos/Escopeta explosión 2.wav';
const audi2 = new Audio();
audi2.src = 'sonidos/Monster gruñido 1.wav';
const audi3 = new Audio();
audi3.src = 'sonidos/Espada lucha.wav';
const audi4 = new Audio();
audi4.src = 'sonidos/Explosivos detonó.wav';
const audi5 = new Audio();
audi5.src = 'sonidos/Tormenta 3.wav';

function quitar1() {
  const shoot = document.querySelector('.shoot');
  const cont = document.querySelector('body');
  const coursel1 = document.querySelector('.IMGG1');
  cont.className = '';
  shoot.classList.remove('shooting');
  coursel1.classList.remove('shootTemblor');
}

function añade() {
  const cont = document.getElementById('carouselBody');
  const shoot = document.querySelector('.shoot');
  const coursel1 = document.querySelector('.IMGG1');
  coursel1.classList.add('shootTemblor');
  shoot.classList.add('shooting');
  cont.className = 'body';


  setTimeout(quitar1, 8000);
}
function quitar() {
  const cont = document.querySelector('body');
  cont.className = '';
}


function quitar4() {
  const cont = document.querySelector('body');
  const coursel = document.querySelector('.IMGG');
  cont.className = '';
  coursel.classList.remove('temblor');
}

function añade2() {
  const cont = document.querySelector('body');
  cont.className = 'body2';
  setTimeout(quitar, 5000);
}

function añade3() {
  const cont = document.querySelector('body');
  cont.className = 'body3';
  setTimeout(quitar, 8000);
}
function añade4() {
  const cont = document.querySelector('body');
  const coursel = document.querySelector('.IMGG');
  cont.className = 'body4';
  coursel.classList.add('temblor');


  setTimeout(quitar4, 8000);
}
function añade5() {
  const cont = document.querySelector('body');
  cont.className = 'body5';
  setTimeout(quitar, 9000);
}


const boton = document.getElementById('boton');
boton.addEventListener('click', añade);
const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', añade2);
const boton3 = document.getElementById('boton3');
boton3.addEventListener('click', añade3);
const boton4 = document.getElementById('boton4');
boton4.addEventListener('click', añade4);
const boton5 = document.getElementById('boton5');
boton5.addEventListener('click', añade5);
