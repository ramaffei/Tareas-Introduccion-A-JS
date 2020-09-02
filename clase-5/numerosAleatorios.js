//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

// Retorna un número aleatorio entre min (incluido) y max (excluido)
const $divListadoNumeros = document.querySelector('#listado-aleatorio');
const $promedio = document.querySelector('#promedio');
const $numeroMasPequeno = document.querySelector('#numero-pequeno');
const $numeroMasGrande = document.querySelector('#numero-grande');
const $numeroMasRepetido = document.querySelector("#numero-mas-repetido")


const arrayListaAleatoria = crearArrayAleatorio(15);

crearListaOrdenadaDesdeArray($divListadoNumeros, arrayListaAleatoria);

const promedio = obtenerPrimedioListado(arrayListaAleatoria);
const numeroMasPequeno = obtenerNumeroMasPequeno(arrayListaAleatoria);
const numeroMasGrande = obtenerNumeroMasGrande(arrayListaAleatoria);
const numeroMasRepetido = obtenerNumeroMasRepetido(arrayListaAleatoria);

function crearNumeroAleatorio(min=1, max=20) {
    return Math.floor( Math.random() * (max - min) + min);
}

function crearArrayAleatorio(cantidadItems){
    let i = 0;
    let arrayNumerosAleatorios = [];

    while(i<cantidadItems) {
    arrayNumerosAleatorios.push(crearNumeroAleatorio())
    i++;
    }
    return arrayNumerosAleatorios;
}

function crearListaOrdenadaDesdeArray(padre, arrayLista){
    const nuevoListado = document.createElement('ol');
    
    let i = 0;

    while(i<arrayLista.length) {
    let nuevoItem = document.createElement('li');
    padre.appendChild(nuevoListado.appendChild(nuevoItem)).textContent = arrayLista[i];
    i++;
    } 
}

function obtenerPrimedioListado(listadoAleatorio){

    let suma = 0;
    
    for (let i = 0; i<listadoAleatorio.length; i++){

        suma += Number(listadoAleatorio[i]);

    }
    let promedioRedondo = Math.floor (suma/listadoAleatorio.length)
    return promedioRedondo;
}

function obtenerNumeroMasPequeno(listadoAleatorio){
    
    let numeroMasPequeno;
    
    for (let i = 0; i<listadoAleatorio.length; i++){

        let numeroDeLista = Number(listadoAleatorio[i])
        numeroMasPequeno = numeroMasPequeno < numeroDeLista ? numeroMasPequeno : numeroDeLista;

    }
    
    return numeroMasPequeno;
}

function obtenerNumeroMasGrande(listadoAleatorio){
    
    let numeroMasGrande;
    
    for (let i = 0; i<listadoAleatorio.length; i++){

        let numeroDeLista = Number(listadoAleatorio[i])
        numeroMasGrande = numeroMasGrande > (numeroDeLista || 0) ? numeroMasGrande : numeroDeLista;
    }
    
    return numeroMasGrande;
}

function obtenerNumeroMasRepetido(listadoAleatorio){

    let arrayContador = [];
    let numerosMasRepetidos = []

    for (let i = 0; i<listadoAleatorio.length; i++){

           let numeroDeLista = Number(listadoAleatorio[i]);
            
           if (arrayContador[numeroDeLista] === undefined){
               arrayContador[numeroDeLista] = 1;
           } else {
           arrayContador[numeroDeLista]++;
           }       
    }
        console.log(arrayContador);
        const masRepeticiones = obtenerNumeroMasGrande(arrayContador);
        console.log(masRepeticiones);
    for (i = 0; i<arrayContador.length; i++){

        if (arrayContador[i] === masRepeticiones && masRepeticiones !== 0){
            numerosMasRepetidos.push(i);
        } 
    }

     return numerosMasRepetidos;

}

$promedio.textContent = `El promedio es: ${promedio}`;
$numeroMasPequeno.textContent = `El numero mas pequeño es: ${numeroMasPequeno}`;
$numeroMasGrande.textContent = `El numero mas grande es: ${numeroMasGrande}`;
$numeroMasRepetido.textContent = numeroMasRepetido.length > 0 ? `El/Los numeros mas repetido/s es/son ${numeroMasRepetido}` : 'No hay numeros repetidos';
