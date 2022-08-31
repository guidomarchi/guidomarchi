// Variables
const carrito = document.querySelector('#carrito');
const listapc = document.querySelector('#lista-pc');
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

   
    listapc.addEventListener('click', agregarPc);

    carrito.addEventListener('click', eliminarpc);

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
    })
}

function agregarPc(e){
    e.preventDefault();
    console.log(e.target.classList);
    if (e.target.classList.contains('agregar-carrito')) {
        const pc = e.target.parentElement.parentElement;
        leerDatos(pc);
    }
}

function eliminarpc(e){
    if (e.target.classList.contains('borrar-pc')) {
        const pcId = e.target.getAttribute('data-id');
        // creo un nuevo array filtrando todo las pc s que tengan un id distinto al que quiero borrar
        articulosCarrito = articulosCarrito.filter(pc => pc.id !== pcId);

        carritoHTML();
    }
}

//lee el contenido del card
function leerDatos(pc){

    //guardo el contenido del card en un obj
    const infoPc = {
        imagen: pc.querySelector('img').src,
        titulo: pc.querySelector('h5').textContent,
        precio: pc.querySelector('.precio').textContent,
        id: pc.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento existe en el carrito
    const existe = articulosCarrito.some(pc => pc.id === infoPc.id );
    if(existe){
        //actualiza la cantidad 
        //.map genera un nuevo arreglo
        const pcs = articulosCarrito.map(pc => {
            if (pc.id === infoPc.id) {
                
                pc.cantidad++;
                return pc;
                
            } else {
                return pc;
                
            }
        });
        console.log(pcs);
        // a articulosCarrito le agrgo el nuevo array
        articulosCarrito = [...pcs];
    } else {
        //agrego el obj a un array 
        articulosCarrito = [...articulosCarrito, infoPc];
        
    }
    
    carritoHTML();
}

//agrega la info que tenemos al carrito

function carritoHTML() {
    //limpia el html
    limpiarHTML();

    articulosCarrito.forEach( pc =>{
        const { imagen, titulo, precio, cantidad, id} = pc;
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
                <a href="#" class="borrar-pc" data-id="${id}"> X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row);

        sincronizarStorage();
    });
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.textContent = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}