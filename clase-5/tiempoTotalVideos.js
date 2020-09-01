// TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let tiempoDuracionTotalenSegundos = 0;
let contadorVideos = 0;

const $botonAgregarVideo = document.querySelector('#boton-agregar');
const $botonCalcularTiempoTotal = document.querySelector('#boton-calcularTiempoTotal');
const $horasDuracion = document.querySelector('#horas-duracion');
const $minutosDuracion = document.querySelector('#minutos-duracion');
const $segundosDuracion = document.querySelector('#segundos-duracion');
const $duracionTotal = document.querySelector('#duracionTotalVideos')
const $videosAgregados = document.querySelector('#videos-ingresados')

function convertirASegundos (horas, minutos, segundos){
    horas = Number(horas * 3600);
    minutos = Number(minutos * 60);
    segundos = Number(segundos);
    return horas+minutos+segundos
}

function convertirAhhmmss(segundosTotales){

    const horas = Math.floor( segundosTotales / 3600 );  
    let minutos = Math.floor( (segundosTotales % 3600) / 60 );
    let segundos = segundosTotales % 60;

    minutos = minutos < 10 ? '0' + minutos : minutos;

    segundos = segundos < 10 ? '0' + segundos : segundos;

    let resultado = `El tiempo de duracion total del curso es ${horas}:${minutos}:${segundos}`;
    return resultado;
}

$botonAgregarVideo.onclick = function (){

    contadorVideos++;
    $videosAgregados.textContent = `Videos agregados: ${contadorVideos}`
    let duracionTotalEnSegundos = convertirASegundos($horasDuracion.value, $minutosDuracion.value, $segundosDuracion.value);
    tiempoDuracionTotalenSegundos += duracionTotalEnSegundos;
}

$botonCalcularTiempoTotal.onclick = function () {

$duracionTotal.textContent = convertirAhhmmss(tiempoDuracionTotalenSegundos);

    return false
}