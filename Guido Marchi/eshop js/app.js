// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

//listeners
cargarEventListeners();

function cargarEventListeners(e) {
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    });

    //cuando agrega un curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
    })
}

function agregarCurso(e){
    e.preventDefault();
    console.log(e.target.classList);
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        leerDatos(curso);
    }
}

function eliminarCurso(e){
    if (e.target.classList.contains('borrar-curso')) {
        //obtengo el id del curso que quiero eliminar
        const cursoId = e.target.getAttribute('data-id');
        // creo un nuevo array filtrando todo los cursos que tengan un id distinto al que quiero borrar
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML();
    }
}

//lee el contenido del card
function leerDatos(curso){

    //guardo el contenido del card en un obj
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id );
    if(existe){
        //actualiza la cantidad 
        //.map genera un nuevo arreglo
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                //si el id del curso analizado(infoCurso.id) es igual al id de otro curso(curso.id)
                curso.cantidad++;
                return curso;
                //agrega el curso qu ya existia con la cantidad modificada al nuevo arreglo
            } else {
                return curso;
                //agrega el curso como esta
            }
        });
        console.log(cursos);
        // a articulosCarrito le agrgo el nuevo array
        articulosCarrito = [...cursos];
    } else {
        //agrego el obj a un array 
        articulosCarrito = [...articulosCarrito, infoCurso];
        //si no pongo una copia de lo que ya hbia en el carrito se sobrescribe la info
    }
    
    carritoHTML();
}

//agrega la info que tenemos al carrito

function carritoHTML() {
    //limpia el html
    limpiarHTML();

    articulosCarrito.forEach( curso =>{
        const { imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="75">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row);

        sincronizarStorage();
    });
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//elimina los cursos del tbody
function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.textContent = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}