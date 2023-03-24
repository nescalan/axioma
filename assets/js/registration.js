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
    let fullNameLogin = $("#fullname-login").val();
    let passwordInputLogin = $("#password-login").val();

    // Using trim()
    fullNameLogin = $.trim(fullNameLogin);
    passwordInputLogin = $.trim(passwordInputLogin);

    // Submit the form if the sanitized data is valid
    if (fullNameLogin.length > 0 && passwordInputLogin.length > 0) {
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
    let fullNameLogin = $("#fullname-login").val();
    let passwordInputLogin = $("#password-login").val();
    fullNameLogin = $.trim(fullNameLogin);
    passwordInputLogin.trim();

    // DEBUG: console.log();
    console.log(`Nombre: ${fullNameLogin} | Tamaño: ${fullNameLogin.length}`);
    console.log(
      `Password: ${passwordInputLogin} | Tamaño: ${passwordInputLogin.length}`
    );
  });
});
