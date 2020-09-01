//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $botonCalcular = document.querySelector('#boton-Calcular')
$botonCalcular.onclick = function(){
  const $salarioAnual = document.querySelector('#salario-Anual');
  const resultado = $salarioAnual.value / 12;
  let $salarioMensual = document.querySelector('#salario-Mensual');
  $salarioMensual.value = resultado; 

}
