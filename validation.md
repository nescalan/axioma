$(document).ready(function() {
// get the form input elements using jQuery selectors
var form = $('#signup-form');
var firstNameInput = $('#first-name');
var lastNameInput = $('#last-name');
var emailInput = $('#email');
var passwordInput = $('#password');

// attach an event listener to the form submit button
form.submit(function(event) {
// prevent the form from submitting
event.preventDefault();

    // validate each input field
    var firstName = firstNameInput.val();
    var lastName = lastNameInput.val();
    var email = emailInput.val();
    var password = passwordInput.val();

    if (firstName.trim() === '') {
      // display an error message for the first name field
      firstNameInput.addClass('is-invalid');
      firstNameInput.siblings('.invalid-feedback').text('Please enter your first name.');
    } else {
      firstNameInput.removeClass('is-invalid');
    }

    if (lastName.trim() === '') {
      // display an error message for the last name field
      lastNameInput.addClass('is-invalid');
      lastNameInput.siblings('.invalid-feedback').text('Please enter your last name.');
    } else {
      lastNameInput.removeClass('is-invalid');
    }

    if (email.trim() === '') {
      // display an error message for the email field
      emailInput.addClass('is-invalid');
      emailInput.siblings('.invalid-feedback').text('Please enter your email address.');
    } else if (!isValidEmail(email)) {
      // display an error message if the email format is invalid
      emailInput.addClass('is-invalid');
      emailInput.siblings('.invalid-feedback').text('Please enter a valid email address.');
    } else {
      emailInput.removeClass('is-invalid');
    }

    if (password.trim() === '') {
      // display an error message for the password field
      passwordInput.addClass('
