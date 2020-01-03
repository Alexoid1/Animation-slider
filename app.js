let audi=new Audio();
audi.src='sonidos/Escopeta explosión 2.wav';
let audi2=new Audio();
audi2.src='sonidos/Monster gruñido 1.wav'
let audi3=new Audio();
audi3.src='sonidos/Espada lucha.wav'
let audi4=new Audio();
audi4.src='sonidos/Explosivos detonó.wav'
let audi5=new Audio();
audi5.src='sonidos/Tormenta 3.wav'

let boton=document.getElementById('boton');
boton.addEventListener('click',añade);
let boton2=document.getElementById('boton2');
boton2.addEventListener('click',añade2);
let boton3=document.getElementById('boton3');
boton3.addEventListener('click',añade3);
let boton4=document.getElementById('boton4');
boton4.addEventListener('click' ,añade4);
let boton5=document.getElementById('boton5');
boton5.addEventListener('click' ,añade5);


function añade(){let cont=document.querySelector('body');
cont.className='body';
setTimeout(quitar,5000)};
function quitar(){
    let cont=document.querySelector('body');
    cont.className='';
}

function añade2(){
    let cont=document.querySelector('body');
    cont.className='body2';
    setTimeout(quitar,5000)
}; 

function añade3(){
    let cont=document.querySelector('body');
    cont.className='body3';
    setTimeout(quitar,8000);
};  
function añade4(){
    let cont=document.querySelector('body');
    cont.className='body4';
    setTimeout(quitar,5000);

}
function añade5(){
    let cont=document.querySelector('body');
    cont.className='body5';
    setTimeout(quitar,8000);

}




