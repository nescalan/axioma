$(document).ready(function () {
  // DATA BASE: Active users
  const activeUsers = [
    {
      id: "109130576",
      usuario: "Nelson Gonzalez",
      clave: "nxbwcp7h",
      empresa: "Mobil Phone",
      tipoUsuario: "operario",
      activo: true,
    },
    {
      id: "304130541",
      usuario: "Jorge Basilio",
      clave: "nxbwcp7h",
      empresa: "Mobilnet Solutions",
      tipoUsuario: "supervisor",
      activo: true,
    },
    {
      id: "401820626",
      usuario: "Nathalia Rojas",
      clave: "nxbwcp7h",
      empresa: "Axioma Systems",
      tipoUsuario: "administrador",
      activo: true,
    },
    {
      id: "88285888",
      usuario: "Marco Gonzalez",
      clave: "nxbwcp7h",
      empresa: "Saint Gregori",
      tipoUsuario: "super usuario",
      activo: true,
    },
    {
      id: "103590581",
      usuario: "Don Nelson",
      clave: "nxbwcp7h",
      empresa: "Mototurbo Comunicaciones",
      tipoUsuario: "invitado",
      activo: true,
    },
  ];

  function userErrorMessage() {
    const userErrorMessage = `
    <div class="error-message">
      <p>"Está intentando ingresar con un usuario incorrecto o contraseña inválida."</p>
    </div>
    `;
    $("#login-error-message").html(userErrorMessage);
    $("#snackbar").html(userErrorMessage).addClass("show");

    setTimeout(function () {
      $("#snackbar").html(userErrorMessage).removeClass("show");
    }, 3000);
  }

  $("#btn-login").click(() => {
    // Get the values entered in the form fields
    let idLogin = $("#id-login").val();
    idLogin = parseInt(idLogin);
    let passwordInputLogin = $("#password-login").val();

    // TRIM(): trim function
    idLogin = $.trim(idLogin);
    passwordInputLogin = $.trim(passwordInputLogin);

    // SUBMIT: the form if the sanitized data is valid
    if (idLogin.length > 0 && passwordInputLogin.length > 0) {
      // SEARCH: For the id in JSON file
      let usuariosActivos = [];
      for (let i = 0; i < activeUsers.length; i++) {
        usuariosActivos.push(activeUsers[i].id);
      }

      // INCLUDES(): Search for the id in the DDBB
      let idResponse = usuariosActivos.includes(idLogin);
      console.log(idResponse);

      // CONDITIONAL ID: Search for user id
      if (idResponse) {
        // SEARCH: For the password in JSON file
        let passwordActivos = [];
        for (let i = 0; i < activeUsers.length; i++) {
          passwordActivos.push(activeUsers[i].clave);
        }

        // INCLUDES(): Search for the password
        let pwdResponse = passwordActivos.includes(passwordInputLogin);

        // CONDITIONAL PASSWORD: Search for user password
        if (pwdResponse) {
          // REDIRECT: to a main page
          window.location.replace("./main.html");

          console.log(idLogin);
        } else {
          userErrorMessage();
        }
      } else {
        // ERROR MESSAGE: Tried to sign in with an incorrect account or password.
        userErrorMessage();
      }
    } else {
      // ERROR MESSAGE: Blank Form.
      const loginErrorMessage = `
      <div class="error-message">
        <p>"Por favor, complete todos los campos."</p>
      </div>
      `;
      const loginSnackbar = `
        <p>"Complete all the requested fields."</p>
      `;
      $("#login-error-message").html(loginErrorMessage);
      $("#snackbar").html(loginErrorMessage).addClass("show");
      setTimeout(function () {
        $("#snackbar").html(loginErrorMessage).removeClass("show");
      }, 3000);
    }
  });
});
