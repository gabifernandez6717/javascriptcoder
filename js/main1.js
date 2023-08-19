// Recuperar la información del storage
const carritoInfo = localStorage.getItem('carritoInfo')
const precioTotal = localStorage.getItem('precioTotal')
//variables
const card =document.querySelector('.card')
const contenedor = document.querySelector('.contenedor')
const cardCantidades = document.querySelectorAll('.card-cantidad')
const contenedorCarrito = document.querySelector('.header')
const carrito = []
const clientesSatisfechosList = document.getElementById('clientesSatisfechos')
const btnVaciarCarrito = document.getElementById('vaciarCarrito')
//asignarle el evento click a contenedor
contenedor.addEventListener('click', (e) => {
    const BTNAniadirCarrito = e.target.classList.contains('btn-primary')
    if (BTNAniadirCarrito) {
        const productoId = parseInt(e.target.id)
        const productoEnCarrito = carrito.find(item => item.id === productoId)
        Swal.fire({
            icon: 'success',
            title: '¡Añadido al carrito!',
            text: 'Gracias por su compra, si desea ver su carrito de compras clickee el carrito.',
            showConfirmButton: false,
            timer:3500,
            timerProgressBar: true,
        })
        if (productoEnCarrito) {
            productoEnCarrito.cantidad++
        } else {
            const producto = IPhones.find(item => item.id === productoId)
            carrito.push({ ...producto, cantidad: 1 })
        }
        actualizarCantidadesEnDOM()
    }
})
// Función para actualizar la cantidad de iphones comprados en la tarjeta
function actualizarCantidadesEnDOM() {
    carrito.forEach(productoEnCarrito=>{
        const tarjeta= document.querySelector(`.c${productoEnCarrito.id}`)
        if (tarjeta){
            const cantidadElement=tarjeta.querySelector('.card-cantidad')
            cantidadElement.textContent='Cantidad: '+ productoEnCarrito.cantidad
        }
    })
}
//asignarle evento click al carrito
contenedorCarrito.addEventListener('click', (e) => {
    const BTNCarrito = e.target.classList.contains('carritoCompras')
    if (BTNCarrito) {
        const verCarrito=true
        if (verCarrito){
            let infoCarrito=''
            let precioTotal = 0
            for (const producto of carrito) {
                infoCarrito += 'Producto: '+producto.nombre+', Precio: $'+producto.precio+', Cantidad: '+producto.cantidad+'\n'
                precioTotal += producto.precio * producto.cantidad
            }
            if (infoCarrito) {
                infoCarrito += '\nPrecio Total: $'+precioTotal
            // GUARDAR LA INFO EN STORAGE
            localStorage.setItem('carritoInfo', infoCarrito)
            localStorage.setItem('precioTotal', precioTotal)
            Swal.fire({
                icon: 'info',
                title: 'Productos en el carrito:\n \n -' + infoCarrito,
                text: 'estos son los productos que posee tu carrito de compras',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Su carrito de compras está vacío.',
                    text: 'para añadir un producto al carrito es necesario que clickee en "Añadir al carrito"',
                    })
            }
        }
    }
})
// Evento para vaciar el carrito
btnVaciarCarrito.addEventListener('click', () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará todos los productos del carrito',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar carrito',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        // Vaciar el carrito, actualizar cantidad en DOM, poner que las cantidades de las tarjetas quede en cero, "limpiar" el almacenamiento
        if (result.isConfirmed) {
            carrito.length = 0
            actualizarCantidadesEnDOM()
            cardCantidades.forEach(cantidadElement => {
                cantidadElement.textContent = 'Cantidad: 0'
            })
            localStorage.removeItem('carritoInfo')
            localStorage.removeItem('precioTotal')
            Swal.fire(
                'Carrito vaciado',
                'Todos los productos han sido eliminados del carrito',
                'success'
            )
        }
    })
})
//API clientes
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    users.forEach(user => {
        const listItem = document.createElement('li')
        listItem.textContent = user.name
        clientesSatisfechosList.appendChild(listItem)
    })
})
.catch(error => {
    Swal.fire({
        icon: 'error',
        title: 'Algo salió mal.',
        text: 'Estamos trabajando para solucionarlo.'
    })
    console.log('Error al obtener datos:', error)
    })














