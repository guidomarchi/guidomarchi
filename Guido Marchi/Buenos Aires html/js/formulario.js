//variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail')

//variables para campos
const email = document.querySelector('#email');
const nombre = document.querySelector('#nombre');
const mensaje = document.querySelector('#mensaje');
let contador = document.querySelector('#contador');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);

    
    email.addEventListener('blur', validarFormulario);
    nombre.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('input', contadorCaracteres);

    //enviar email
    formulario.addEventListener('submit', enviarEmail);
}

//funciones
function iniciarApp(){
    btnEnviar.disable = true
    btnEnviar.classList.add('botonEnviar');
}

//cuento cracteres del textarea
function contadorCaracteres(e){
    contador.textContent = e.target.value.length
}

//valido formulario
function validarFormulario(e){

    if (e.target.value.length > 0) {
        //si no esta vacio el campo saca el mensaje de error
        const error = document.querySelector('.obligatorio');
        if (error) {
            error.remove();
        }

        e.target.classList.remove('error');
        e.target.classList.add('correcto');

    } else {
        e.target.classList.remove('correcto');
        e.target.classList.add('error');
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){

        if (er.test(e.target.value)) {
            const error = document.querySelector('.obligatorio');
            if (error) {
                error.remove();
            }

            e.target.classList.remove('error');
            e.target.classList.add('correcto');

        } else {
            e.target.classList.remove('correcto');
            e.target.classList.add('error');
            mostrarError('El email no es valido');
        }
    }

    if( er.test(email.value) && nombre.value !== '' && mensaje.value !== '' ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('botonEnviar');
    }

}

function mostrarError(textoError){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = textoError;
    mensajeError.classList.add('obligatorio');

    const errores = document.querySelectorAll('.obligatorio');
    if (errores.length === 0){
        formulario.insertBefore(mensajeError, document.querySelector('.contenedorEmail'));
    }
}

//envia email
function enviarEmail(e){
    e.preventDefault();

    //muestra spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //DEspues de 3s esconder spinner y mostrar el msj
    setTimeout( () => {
        spinner.style.display = 'none';

        const parrafo = document.createElement('p');
        parrafo.classList.add('mensajeSpinner');
        parrafo.textContent = 'EL MENSAJE SE HA ENVIADO CORRECTAMENTE!';

        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();

            resetearFormulario();
        }, 5000);
    }, 3000 );
}

//funcion que resetea
function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}