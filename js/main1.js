// Recuperar la información del storage
const carritoInfo = localStorage.getItem('carritoInfo')
const precioTotal = localStorage.getItem('precioTotal')
//variables
const card =document.querySelector('.card')
const contenedor = document.querySelector('.contenedor')
const contenedorCarrito = document.querySelector('.header')
const carrito = []
//asignarle el evento click a contenedor
contenedor.addEventListener('click', (e) => {
    Swal.fire({
        icon: 'success',
        title: '¡Añadido al carrito!',
        text: 'Gracias por su compra, si desea ver su carrito de compras diríjase hacia la parte superior de la página y clickee el carrito.',
    })
    const BTNAniadirCarrito = e.target.classList.contains('btn-primary')
    if (BTNAniadirCarrito) {
        const productoId = parseInt(e.target.id)
        const productoEnCarrito = carrito.find(item => item.id === productoId)
        if (productoEnCarrito) {
            productoEnCarrito.cantidad++
        } else {
            const producto = IPhones.find(item => item.id === productoId)
            carrito.push({ ...producto, cantidad: 1 })
        }
        console.log('El cliente añadió al carrito un iPhone ' + e.target.id)
        console.log(carrito)
    }
})
//asignarle evento click al carrito
contenedorCarrito.addEventListener('click', (e) => {
    const BTNCarrito = e.target.classList.contains('carritoCompras')
    if (BTNCarrito) {
        verCarrito=confirm('desea ver su carrito de compras?')
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
                title: 'Productos en el carrito:\n' + infoCarrito,
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