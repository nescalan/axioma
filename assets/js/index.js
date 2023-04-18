$(document).ready(function () {
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
    let errorMessage, errorFlag;

    console.log(domErrorMessage);

    //Shows User Name and Error Message
    console.log(`user: ${domUserName} | Pwd: ${domPassword} |`);

    if (domUserName.length != 0 && domPassword.length != 0) {
      // CONDITION: check user length
      if (domUserName.length < 9) {
        errorMessage =
          "No se pudo encontrar el usuario.<br> Revisa la ortografía e inténtalo de nuevo.";
        domErrorMessage.fadeIn();
        errorFlag = true;
      } else {
        domErrorMessage.fadeOut();
        errorFlag = false;
      }
      // CONDITION: check user and password length
      if (domPassword.length < 8) {
        errorMessage = "La contraseña debe tener al menos 8 caracteres";
        domErrorMessage.fadeIn();
        errorFlag = true;
      }
    } else {
      console.log("Debe rellenar todos los campos");
      errorMessage = "Debe rellenar todos los campos";
      domErrorMessage.fadeIn();
      errorFlag = true;
    }

    // CONDITION: Displays errror Message on Login Form
    if (errorFlag) {
      //CSS: Styles for errorMessage
      printLoginErrorMeggage(domErrorMessage, errorMessage);
    }

    // Validate the password length
  });
});
