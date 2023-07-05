/*let nombre = prompt('ingrese su nombre')
if (nombre== ''){
    alert('no seas tonto, pone tu nombre')
}
else{
    alert('Hola'+' '+nombre+'!')
let respuestaPago= prompt(nombre+' '+'tenes plata?')
if (respuestaPago==''){
    alert('dale imbesil deci')
    let respuestaPago= prompt(nombre+' '+'tenes plata?')
    if (respuestaPago=='si'){
        alert(nombre+' sos un capo, tenes plata')
    }
    if (respuestaPago=='no'){
        alert(nombre+' no sos un capo, no tenes plata')
    }
}
if (respuestaPago=='si'){
    alert(nombre+' sos un capo, tenes plata')
}
if (respuestaPago=='no'){
    alert(nombre+' no sos un capo, no tenes plata')
}}

let precio = prompt('cuanta plata tenes?')

if (precio<50){
    alert('tenes menos que $50')
}
else if (precio==50){
    alert('tenes $50')
}
else {
    alert('tenes mas que $50')
}
*/
//CLASE 4
/*
//sin funcion
let nombreIngresado   = prompt("Ingresar nombre");
alert("El nombre ingresado es " + nombreIngresado);

let nombreIngresado2   = prompt("Ingresar nombre");
alert("El nombre ingresado es " + nombreIngresado2);

let nombreIngresado3   = prompt("Ingresar nombre");
alert("El nombre ingresado es " + nombreIngresado3);

//con funcion
function solicitarNombre() {
    let nombreIngresado   = prompt("Ingresar nombre");
    alert("El nombre ingresado es " + nombreIngresado);
}

solicitarNombre()




function calcularOperacion(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case '+':
            return primerNumero + segundoNumero
        case '-':
            return primerNumero - segundoNumero
        case '*':
            return primerNumero * segundoNumero
        default:
            return 0
    }
}
*/
/*
let numeroA = Number(prompt('Ingrese el primer número:'))
let numeroB = Number(prompt('Ingrese el segundo número:'))
let operacion = prompt('Ingrese la operación:')

let resultado = calcularOperacion(numeroA, numeroB, operacion)

console.log(resultado);
*/

//CONTAR DEL 0 AL 10
    /*alert('hola')
    let contar = 0
    for(contar=0; contar<=10; contar++) {alert(contar)}
    */

//BUCLE WHILE
    /*let entrada=prompt('ingrese la entrada')
    while(entrada!='esc'){
    alert('hasta que no ingreses esc no salis del bucle')
    entrada=prompt('ingrese la entrada')}
    */

//EJ VALIDACION DE CORREO ELECTRONICO
    /*let userEmail=''
    let confirmEmail=''
    let askAgain=true
    do {
    userEmail=prompt('ingrese su correo')
    confirmEmail=prompt('confirme su correo')
    if(userEmail===confirmEmail){
        alert('su correo fue ingresado con exito')
        askAgain=false
    }
    else{
        alert('los correos no son iguales')
    }
    }while(askAgain)
    */

//switch

//ejemplo de suma con funcion
/*
let resultado = 0
function sumaDosNumeros (primero,segundo) {
    return primero + segundo
}

resultado=sumaDosNumeros (1,2)
alert (resultado)


//CALCULAR IVA
const sumar= (a,b)=> a+b
//const restar= (a,b)=> a-b
const calcularIva= (precio)=>precio*0.22

let precioProducto= Number (prompt('ingrese el precio'))

const iva=calcularIva(precioProducto)
const subtotal=sumar(precioProducto, iva)

alert ('el 22% de el precio ingresado es: $'+ iva)
alert('el subtotal es '+ subtotal)*/

//inicio
alert('Hola! bienvenido a calculadora coder')
//variables
let operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division 5-salir')
let resultado=0
let verificador=true
let salir=false
//funciones
const sumar= (a,b)=> Number(prompt('primer numero'))+ Number (prompt('segundo numero'))
const restar= (a,b)=>Number(prompt('primer numero'))-Number(prompt('segundo numero'))
const multiplicar= (a,b)=> Number(prompt('primer numero'))*Number(prompt('segundo numero'))
const dividir= (a,b)=> Number(prompt('primer numero'))/Number(prompt('segundo numero'))
//ciclo do...while
do {
    if (operacion=== 1||2||3||4) {
        if (operacion ==='1') {resultado=sumar()
            alert('el resultado es '+ resultado)
            operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division 5-salir')
    }
        if (operacion==='2') {resultado=restar()
            alert('el resultado es '+ resultado)
            operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division 5-salir')
        }
        if (operacion==='3') {resultado=multiplicar()
            alert('el resultado es '+ resultado)
            operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division 5-salir')
        }
        if (operacion==='4') {resultado=dividir()
            alert('el resultado es '+ resultado)
            operacion =prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division 5-salir')
        }
    }
    if (operacion !== 1||2||3||4) {
        salir=promp('desea salir?'.toLowerCase())
        if(salir==='si'){
            alert('hasta pronto')
            break}
        if (salir==='no') {
            operacion=prompt ( 'ingrese el numero asignado a la operacion que desea efectuar: 1-suma, 2-resta, 3-multiplicacion 4-division 5-salir')
}}}
while (operacion !== 1||2||3||4||'')

alert ('para volver a utilizarla refresque la pagina')
/*
if (operacion=== 1||2||3||4) {
    if (operacion ==='1') {resultado=sumar()
        alert('el resultado es '+ resultado)
}
    if (operacion==='2') {resultado=restar()
        alert('el resultado es '+ resultado)
    }
    if (operacion==='3') {resultado=multiplicar()
        alert('el resultado es '+ resultado)
    }
    if (operacion==='4') {resultado=dividir()
        alert('el resultado es '+ resultado)
    }
}
else { verificador=false
    alert ('La operacion ingresada no es valida')}
    if (verificador=false) {
        alert ('La operacion ingresada no es valida'+'Que desea calcular? 1-suma, 2-resta, 3-multiplicacion 4-division 5-salir')

    }*/