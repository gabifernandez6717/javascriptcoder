//inicio
alert('Hola! bienvenido a calculadora coder')
//variables
let operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division ')
let resultado=0
//funciones
const sumar= (a,b)=> Number(prompt('primer sumando'))+ Number (prompt('segundo sumando'))
const restar= (a,b)=>Number(prompt('ingrese el minuendo'))-Number(prompt('ingrese el sustraendo'))
const multiplicar= (a,b)=> Number(prompt('primer factor'))*Number(prompt('segundo factor'))
const dividir= (a,b)=> Number(prompt('ingrese el dividendo'))/Number(prompt('ingrese el divisor'))
//ciclo do...while
do {
    if (operacion=== 1||2||3||4) {
        if (operacion ==='1') {resultado=sumar()
            alert('el resultado es '+ resultado)
            operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division ')
        }
        if (operacion==='2') {resultado=restar()
            alert('el resultado es '+ resultado)
            operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division ')
        }
        if (operacion==='3') {resultado=multiplicar()
            alert('el resultado es '+ resultado)
            operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division ')
        }
        if (operacion==='4') {resultado=dividir()
            alert('el resultado es '+ resultado)
            operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division ')
        }}}
while (operacion !== 1||2||3||4)

