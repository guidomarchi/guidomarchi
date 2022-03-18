//variables
const textArea = document.querySelector('#mensaje');
let contador = document.querySelector('#contador');
const formulario= document.querySelector('#formulario');
const lista = document.querySelector('#resultado');
let tareas = [];

//event listeners
eventListeners();
function eventListeners(){
    textArea.addEventListener('input', contadorCarac);

    formulario.addEventListener('submit', agregarTarea);

    document.addEventListener('DOMContentloaded', () => {
        tareas = JSON.parse( localStorage.getItem('tareas')) || [];
        crearHTML();
    });
}

//funciones
function agregarTarea(e){
    e.preventDefault();

    const tarea = textArea.value;

    if(tarea === ''){
        mostrarError('Debe completar este campo');
    }

    tareaObj = {
        id: Date.now(),
        //tarea: tarea
        tarea
    }

    tareas = [...tareas, tareaObj];

    crearHTML();
    formulario.reset();
}

function mostrarError(error){
    textArea.classList.add('incompleto');

    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('.mensaje');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        textArea.classList.remove('incompleto')
        mensajeError.remove();
    }, 5000);
}

function crearHTML(){
    limpiarHTML();

    if (tareas.length > 0) {
        tareas.forEach(tarea => {
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar')
            btnEliminar.innerText = 'X';
            btnEliminar.onclick = () => {
                borrarTarea(tarea.id);
            }

            const li = document.createElement('li');

            li.style.textDecoration = 'none';

            li.textContent = tarea.tarea;

            li.appendChild(btnEliminar);

            lista.appendChild(li);
        });
    }

    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function borrarTarea(id){
    tareas = tareas.filter( tarea => tarea.id !== id);
    crearHTML();
}

function limpiarHTML(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
}

function contadorCarac(e){
    contador.textContent = e.target.value.length;
}