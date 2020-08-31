//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $botonCalcular = document.querySelector('#botonCalcular')
$botonCalcular.onclick = function(){
  const $salarioAnual = document.querySelector('#salarioAnual');
  const resultado = $salarioAnual.value / 12;
  let $salarioMensual = document.querySelector('#salarioMensual');
  $salarioMensual.value = String(resultado); 
}
