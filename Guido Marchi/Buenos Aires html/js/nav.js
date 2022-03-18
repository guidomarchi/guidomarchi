const nav = document.querySelector('nav')
const items = document.querySelectorAll('nav div a')
const boton = document.querySelector('.fas fa-home')
const enlaces = document.querySelector('nav div')

boton.addEventListener('click', mostrarOcultarNav())

function mostrarOcultarNav(){
    if(items.classList.contains('items')){
        items.classList.remove('items')

    } else{
        items.classList.add('items');
        enlaces.style.transform = translateY(0);
    }
    
}
