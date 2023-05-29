$(function () {
  // Validate the username
  $("#username").on("keyup", function () {
    let username = $(this).val();
    let error = "Soy mensaje de error";

    if (username.length < 8) {
      error = "Username must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(username)) {
      error = "Username must contain at least one uppercase letter.";
    } else if (!/\d/.test(username)) {
      error = "Username must contain at least one number.";
    }

    $("#error").html(error);
  });

  // Validate the password
  $("#password").on("keyup", function () {
    let password = $(this).val();
    let error = "";

    if (password.length < 8) {
      error = "Password must be at least 8 characters long.";
    }

    $("#error").html(error);
  });

  // Submit the form
  $("#login").on("click", function () {
    let username = $("#username").val();
    let password = $("#password").val();

    if (username == "" || password == "") {
      $("#error").html("Please enter a username and password.");
      return;
    }

    // Do your AJAX call here to log the user in
  });
});
