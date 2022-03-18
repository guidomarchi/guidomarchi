const btnFooter = document.getElementById('btnFooter');

const footer = document.getElementById('footer')

btnFooter.addEventListener('click', () => footer.classList.toggle('mostrar-footer'))




btnFooter.addEventListener('click',  () => mostrarOcultarFooter)

function mostrarOcultarFooter(){
    if(footer.classList.contains('mostrar-footer')){
        footer.classList.remove('mostrar-footer');
        
    } else {
        footer.classList.add('mostrar-footer')
    }
   
}