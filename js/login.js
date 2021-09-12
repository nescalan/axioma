// Declaracion de Variables
const iniciarSesion = document.getElementById("iniciar-sesion");
const inscribirse = document.getElementById("inscribirse");
const signInButton = document.getElementById("signIn");
const signUpButton = document.getElementById("signUp");
const container = document.getElementById("container");
let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");
let user = "admin@email.com";
let pass = "password";

// Funciones
const validar = () => {
  const mainMenu = "/app/main-menu.html";
  if (usuario.value === "") {
    console.log("el campo de usuario es obligatorio");
    evt.preventDefault();
    return false;
  }
  if (clave.value === "") {
    console.log("el campo contraseña es obligatorio");
    evt.preventDefault();
    return false;
  }
  if (usuario.value == user && clave.value == pass) {
    console.log("Exito");
    window.location.replace("/app/main-menu.html");
  }
};

// Listeners del boton para Iniciar Sesión
iniciarSesion.addEventListener("click", validar);

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Listeners del boton para Inscribirse
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
