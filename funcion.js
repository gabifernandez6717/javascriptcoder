const comprar = () => {
    let seguirComprando = true
    do {
        let modeloAComprar = prompt('Que modelo desea comprar?').toUpperCase()
        const modeloEncontrado = modelosIphones.find((modelo) => modelo.modelo === modeloAComprar)
        if (modeloEncontrado) {
            carritoDeIPhones.push(modeloEncontrado)
            seguirComprando = confirm('Desea seguir comprando?\n'+'\naceptar: seguir comprando\n'+'cancelar: ver el carrrito')
        } else {
            alert('El modelo ingresado no es válido. Ingrese un modelo de iPhone válido. por ejemplo: IPhone 8')
        }
    } while (seguirComprando)
    if (carritoDeIPhones.length > 0) {
        let carritoString = carritoDeIPhones.map((modelo) => modelo.modelo + ' ' + modelo.precio).join('\n')
        alert('Su carrito de IPHONES contiene los siguientes modelos:\n' + carritoString)
    } else {
        alert('Su carrito de IPHONES está vacío.')
    }
}