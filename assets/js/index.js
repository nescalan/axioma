$(document).ready(function () {
  // DATA BASE: Active users
  const activeUsers = [
    {
      id: 109130576,
      usuario: "Nelson Gonzalez",
      clave: "4u3p7px6",
      empresa: "Mobil Phone",
      tipoUsuario: "operario",
      activo: true,
    },
    {
      id: 304130541,
      usuario: "Jorge Basilio",
      clave: "nxbwcp7h",
      empresa: "Mobilnet Solutions",
      tipoUsuario: "supervisor",
      activo: true,
    },
    {
      id: 401820626,
      usuario: "Nathalia Rojas",
      clave: "Nvr63537",
      empresa: "Axioma Systems",
      tipoUsuario: "administrador",
      activo: true,
    },
    {
      id: 88285888,
      usuario: "Marco Gonzalez",
      clave: "12345678",
      empresa: "Saint Gregori",
      tipoUsuario: "super usuario",
      activo: true,
    },
    {
      id: 103590581,
      usuario: "Don Nelson",
      clave: "83102332",
      empresa: "Mototurbo Comunicaciones",
      tipoUsuario: "invitado",
      activo: true,
    },
  ];

  $("#login-form").submit(function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the values entered in the form fields
    let idLogin = $("#id-login").val();
    let passwordInputLogin = $("#password-login").val();

    // Using trim()
    idLogin = $.trim(idLogin);
    passwordInputLogin = $.trim(passwordInputLogin);

    // Submit the form if the sanitized data is valid
    if (idLogin.length > 0 && passwordInputLogin.length > 0) {
      $("#login-error-message").html("Enviado Correctamente");
    } else {
      const loginErrorMessage = `
      <div class="error-message">
        <p>"Please fill in all the requested fields."</p>
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

  $("#btn-login").click(() => {
    // Get the values entered in the form fields
    var idLogin = $("#id-login").val();
    let passwordInputLogin = $("#password-login").val();
    idLogin = $.trim(idLogin);
    passwordInputLogin.trim();

    // SEARCH: For the user id
    let usuariosActivos = [];
    for (let i = 0; i < activeUsers.length; i++) {
      usuariosActivos.push(activeUsers[i].id);
      console.log(usuariosActivos);
    }

    console.log(`Este es idLogin: ${idLogin}`);
    let idResponse = usuariosActivos.includes(idLogin);
    console.log(idResponse);

    if (idResponse) {
      console.log("Usuario ya existe");
    } else {
      console.log("Podemos agregarlo a la BBDD");
    }

    // DEBUG: console.log();
    console.log(`Nombre: ${idLogin} | Tamaño: ${idLogin.length}`);
    console.log(
      `Password: ${passwordInputLogin} | Tamaño: ${passwordInputLogin.length}`
    );
  });
});
