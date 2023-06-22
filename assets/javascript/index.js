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

  function printLoginErrorMeggage(domErrorMessage, errorMessage) {
    //CSS: Styles for errorMessage
    domErrorMessage.html(errorMessage).css({
      margin: "20px 0",
      padding: "15px 35px 15px 15px",
      color: "#b94a48",
      "font-size": "14px",
      "line-height": "20px",
      "border-color": "#eed3d7",
      "border-radius": "4px",
      "border-style": "solid",
      "border-width": "1px",
      backgroundColor: "#f2dede",
    });
  }

  $("#login-form").on("click", "#btn-login", function (event) {
    event.preventDefault();
    const parent = $(this).parent();
    const domUserName = $("#username").val();
    const domPassword = $("#password").val();
    const domErrorMessage = parent.find("#error-message");
    let errorMessage, flagError, flagUserName, flagPassword;

    if (domUserName.length != 0 && domPassword.length != 0) {
      // CONDITION: check user length
      if (domUserName.length < 9) {
        errorMessage =
          "No se pudo encontrar el usuario.<br> Revisa la ortografía e inténtalo de nuevo.";
        domErrorMessage.fadeIn();
        flagError = true;
      } else {
        domErrorMessage.fadeOut();
        flagUserName = true;
        flagError = false;
      }
      // CONDITION: password length
      if (domPassword.length < 8) {
        errorMessage = "La contraseña debe tener al menos 8 caracteres";
        domErrorMessage.fadeIn();
        flagError = true;
      } else {
        flagPassword = true;
      }
    } else {
      errorMessage = "Debe rellenar todos los campos";
      domErrorMessage.fadeIn();
      flagError = true;
    }

    // VALIDATE: if user exist
    if (flagUserName == true && flagPassword == true) {
      let foundUser = activeUsers.find((user) => {
        return user.id === domUserName;
      });
      let foundPassword = activeUsers.find((password) => {
        return password.clave === domPassword;
      });

      // CONDITIONAL: If the user and password is found go to menu
      if (foundUser) {
        // console.log(foundUser.usuario);
        if (foundPassword) {
          // console.log(foundPassword.clave);
          // window.location.href = "./pages/main-menu.html";
          document.location.href = "./pages/main-menu.html";
        } else {
          console.log("Password not found");
        }
      } else {
        console.log("User not found");
      }

      console.log(`Felicidades: User ${domUserName} | Pwd: ${domPassword} `);
      errorMessage =
        "Felcidades, cumple con los requisitos. <br> Estamos validando sus credenciales ";
      domErrorMessage.fadeIn();
      flagError = true;
    }
    // CONDITION: Displays errror Message on Login Form
    if (flagError) {
      //CSS: Styles for errorMessage
      printLoginErrorMeggage(domErrorMessage, errorMessage);
    }
  });
});
