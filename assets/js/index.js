$(document).ready(function () {
  $("#login-form").on("change", "#username", function () {
    console.log("Is changing");
  });

  // $("#login-form").on("click", "#btn-login", function (event) {
  //   event.preventDefault();
  //   const parent = $(this).parent();
  //   const domUserName = $("#username").val();
  //   const domPassword = $("#password").val();
  //   let domErrorMessage = parent.find("#error-message").html();

  //   // domErrorMessage.text("Fuck error");
  //   //Shows Error Message

  //   console.log(
  //     `user: ${domUserName} | Pwd: ${domPassword} | Error: ${domErrorMessage}`
  //   );

  //   if (domUserName.length == 0 || domPassword.length == 0) {
  //     errorMessage = "Debe rellenar todos los campos";
  //     $(domErrorMessage).html("Error");
  //   }

  //   // // Validate the username using regular expressions
  //   // if (!/^\d+$/.test(domUserName)) {
  //   //   errorMessage = "El nombre de usuario debe contener solo números";
  //   //   domErrorMessage.fadeIn();
  //   //   return false;
  //   // }

  //   // // Validate the password length
  //   // if (domPassword.length < 8) {
  //   //   errorMessage = "La contraseña debe tener al menos 8 caracteres";
  //   //   domErrorMessage.fadeIn();
  //   //   return false;
  //   // }
  //   // domErrorMessage.html(errorMessage).css({
  //   //   margin: "0px 0px 20px",
  //   //   padding: "15px 35px 15px 15px",
  //   //   color: "#b94a48",
  //   //   "font-size": "14px",
  //   //   "line-height": "20px",
  //   //   "border-color": "#eed3d7",
  //   //   "border-radius": "4px",
  //   //   "border-style": "solid",
  //   //   "border-width": "1px",
  //   //   backgroundColor: "#f2dede",
  //   // });
  // });
});
