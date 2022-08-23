const btnInfo = document.getElementById('btnInfo');

const info = document.getElementById('contenedor-datos');

btnInfo.addEventListener('click', () => info.classList.toggle('mostrar-datos'))

btnInfo.addEventListener('click', () => mostrarInfo);

function mostrarInfo(){
    if(info.classList.contains('mostrar-datos')){
        info.classList.remove('mostrar-datos')
    } else {
        info.classList.add('mostrar-datos')
    }
};

if(screen.width >= '980px'){
    info.classList.remove('mostrar-datos')
}