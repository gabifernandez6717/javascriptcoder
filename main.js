alert ('Hola! Bienvenido a calculadora coder')
 //variables
let continuarUsandoCalculadora= true
//funciones
const sumar= (a,b)=> Number(prompt('primer sumando'))+ Number (prompt('segundo sumando'))
const restar= (a,b)=>Number(prompt('ingrese el minuendo'))-Number(prompt('ingrese el sustraendo'))
const multiplicar= (a,b)=> Number(prompt('primer factor'))*Number(prompt('segundo factor'))
const dividir= (a,b)=> Number(prompt('ingrese el dividendo'))/Number(prompt('ingrese el divisor'))
//ciclo
do {
    //variables
    let operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar:  1-suma, 2-resta, 3-multiplicacion 4-division')
    let resultado=0
    switch (operacion) {
        case '1':
            resultado=sumar()
            alert('El resultado de su operacion es '+resultado)
            break;
        case '2':
            resultado=restar()
            alert('El resultado de su operacion es '+resultado)
            break;
        case '3':
            resultado=multiplicar()
            alert('El resultado de su operacion es '+resultado)
            break;
        case '4':
            resultado=dividir()
            alert('El resultado de su operacion es '+resultado)
            break;
        default:
            alert ('ingrese un numero valido')
            break;
    }
    continuarUsandoCalculadora=confirm('desea seguir usando la calculadora?')
} while (continuarUsandoCalculadora);

alert('Vuelva cuando quiera!')

