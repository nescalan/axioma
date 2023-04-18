$(document).ready(function () {
  $("#login-form").on("change", "#username", function () {
    const parent = $(this).parent();
    const domUserName = $(this).val();
    console.log(domUserName);
    const domErrorMessage = parent.find("#error-message");
    let errorMessage;

    // Validate the username using regular expressions
    if (!/^\d+$/.test(domUserName)) {
      errorMessage =
        "Por favor, ingrese un número de identificación válido sin guiones";
      console.log(errorMessage);
      domErrorMessage.fadeIn();
      errorFlag = true;
    } else {
      // Validate the username length
      if (domUserName.length < 9) {
        console.log(domUserName.length);
        errorMessage = "Revise la cantidad de digitos ingresada";
        console.log(errorMessage);
        domErrorMessage.fadeIn();
        errorFlag = true;
      } else {
        domErrorMessage.fadeOut();
        console.log(domUserName.length);
      }

      if (errorFlag) {
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
    }
  });

  // $("#login-form").on("click", "#btn-login", function (event) {
  //   event.preventDefault();
  //   const parent = $(this).parent();
  //   const domUserName = $("#username").val();
  //   const domPassword = $("#password").val();

  //   //Shows User Name and Error Message
  //   console.log(`user: ${domUserName} | Pwd: ${domPassword} |`);

  //   if (domUserName.length == 0 || domPassword.length == 0) {
  //     errorMessage = "Debe rellenar todos los campos";
  //   }

  //   // Validate the password length
  //   if (domPassword.length < 8) {
  //     errorMessage = "La contraseña debe tener al menos 8 caracteres";
  //     return false;
  //   }
  // });
});
