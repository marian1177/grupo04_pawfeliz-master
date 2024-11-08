document.getElementById("boton_inicio").addEventListener("click", inicio_sesion);
document.getElementById("boton_registrarse").addEventListener("click", registros_datos);
window.addEventListener("resize", anchodePagina);

var contenedor_login_registros = document.querySelector(".contenedor_login_registros");
var formulario_login = document.querySelector(".formulario_login");
var formulario_registro = document.querySelector(".formulario_registro");
var login = document.querySelector(".login");
var registros = document.querySelector(".registros");


function anchodePagina(){
    if(window.innerWidth > 850){
        login.style.display = "block";
        registros.style.display = "block";
    }else{
        registros.style.display = "block";
        registros.style.opacity = "1";
        login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registro.style.display = "none";
        contenedor_login_registros.style.left = "0px";
    }
}

anchodePagina();

function inicio_sesion() {
    if(window.innerWidth > 850) {
        formulario_registro.style.display = "none";
        contenedor_login_registros.style.left = "10px";
        formulario_login.style.display = "block";
        registros.style.opacity = "1";
        login.style.opacity = "0";
    }else {
        formulario_registro.style.display = "none";
        contenedor_login_registros.style.left = "0px";
        formulario_login.style.display = "block";
        registros.style.display = "block";
        login.style.display = "none";
    }

}


function registros_datos() {
    if(window.innerWidth > 850) {
        formulario_registro.style.display = "block";
        contenedor_login_registros.style.left = "410px";
        formulario_login.style.display = "none";
        registros.style.opacity = "0";
        login.style.opacity = "1";
    }else {
        formulario_registro.style.display = "block";
        contenedor_login_registros.style.left = "0px";
        formulario_login.style.display = "none";
        registros.style.display = "none";
        login.style.display = "block";
        login.style.opacity = "1";
    }
}

