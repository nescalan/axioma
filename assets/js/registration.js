$(document).ready(function () {
  $("#signup-form").submit(function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the values entered in the form fields
    let fullNameSignUp = $("#fullname-signup").val();
    let emailSignUp = $("#email-signup").val();
    let passwordInputSignUp = $("#password-signup").val();

    // Using trim()
    fullNameSignUp = $.trim(fullNameSignUp);
    emailSignUp = $.trim(emailSignUp);
    passwordInputSignUp = $.trim(passwordInputSignUp);

    // DEBUG: console.log();
    console.log(`Nombre: ${fullNameSignUp} | Tamaño: ${fullNameSignUp.length}`);
    console.log(`Nombre: ${emailSignUp} | Tamaño: ${emailSignUp.length}`);
    console.log(
      `Password: ${passwordInputSignUp} | Tamaño: ${passwordInputSignUp.length}`
    );

    // Submit the form if the sanitized data is valid
    if (
      fullNameSignUp.length > 0 &&
      emailSignUp.length > 0 &&
      passwordInputSignUp.length > 0
    ) {
      $("#login-form").submit();
      alert("Enviado correctamente");
    } else {
      $("#signup-error-message").text(
        "Please fill in all the requested fields."
      );
    }
  });
});
