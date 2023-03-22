$(document).ready(function () {
  const names = [
    {
      firstName: "Nelson Escalante",
      email: "nelson_escalante@gmail.com",
      password: "",
    },
    {
      firstName: "Nathalia Rojas",
      email: "nathalia_rojas@gmail.com",
      password: "",
    },
    {
      firstName: "Marco Gonzalez",
      email: "marco_gonzalez@gmail.com",
      password: "",
    },
    {
      firstName: "Tiffany Hume",
      email: "tiffany_hume@gmail.com",
      password: "",
    },
    {
      firstName: "Patricia Escalante",
      email: "patricia_escalante@gmail.com",
      password: "",
    },
    {
      firstName: "Jorge Basilio",
      email: "jorge_basilio@gmail.com",
      password: "",
    },
  ];

  function validateInput(element) {
    if (element === "") {
      let message = "This field is required";
      return message;
    }
  }

  // INPUT BOXES: Check if the Sign up input boxes are empty
  $("#btn-signup").click(() => {
    console.log("Sign Up Clicked");

    // GET: all input values
    let fullName = $("#full-name-signup").val();
    $("#full-name-signup").val(validateInput(fullName));
    let email = $("#email-signup").val();
    let password = $("#password-signup").val();
    console.log(fullName);
    console.log(email);
    console.log(password);
  });
});
