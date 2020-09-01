const $botonIngresar = document.querySelector('#boton-ingresar');
$botonIngresar.onclick = function() {

    const $titulo = document.querySelector('h1');
    const $primerNombreUsuario = document.querySelector('#primer-nombre');
    const $segundoNombreUsuario = document.querySelector('#segundo-nombre');
    const $apellidoUsuario = document.querySelector('#apellido');
    const $edadUsuario = document.querySelector('#edad');
    let $informacionUsuario = document.querySelector('#informacion-usuario')

    $titulo.textContent = `Bienvenido! ${$primerNombreUsuario.value}`;
    $informacionUsuario.value = `Tu nombre completo es ${$primerNombreUsuario.value} ${$segundoNombreUsuario.value} ${$apellidoUsuario.value} y tienes ${$edadUsuario.value} años`

    return false
}
