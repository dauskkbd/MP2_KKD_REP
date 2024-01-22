$(document).ready(function () {
  let fn_warning = "Please enter your first name";
  let ln_warning = "Please enter your last name";
  let e_warning = "Please enter your email address";
  let pw_warning = "Please enter a password";
  let character_warning = "Password must consist of 8 - 25 characters";
  let mismatch_pw_warning = "Passwords do not match";
  let re_pw_warning = "Please re-enter your password";
  localStorage.setItem("logged_in", 0);

  $("#first_name_warning").hide();
  $("#first_name").focusout(function () {
    if ($("#first_name").val() == "") {
      $("#first_name_warning").text(fn_warning).fadeIn(800);
    } else {
      $("#first_name_warning").fadeOut();
    }
  });

  $("#last_name_warning").hide();
  $("#last_name").focusout(function () {
    if ($("#last_name").val() == "") {
      $("#last_name_warning").text(ln_warning).fadeIn(800);
    } else {
      $("#last_name_warning").fadeOut();
    }
  });

  $("#email_warning").hide();
  $("#email").focusout(function () {
    if ($("#email").val() == "") {
      $("#email_warning").text(e_warning).fadeIn(800);
    } else {
      $("#email_warning").fadeOut();
    }
  });

  $("#password_warning").hide();

  $("#password").focusout(function () {
    if ($("#password").val() == "") {
      $("#password_warning").text(pw_warning).fadeIn(800);
    } else {
      $("#password_warning").fadeOut();
    }
  });

  $("#re_enter_warning").hide();
  $("#re_enter_password").focusout(function () {
    if ($("#re_enter_password").val() !== $("#password").val()) {
      $("#re_enter_warning").text(mismatch_pw_warning).fadeIn(800);
    } else {
      $("#re_enter_warning").text(mismatch_pw_warning).fadeOut();
    }
  });

  $("#submit_button").click(function (event) {
    event.preventDefault();
    if (
      $("#first_name").val() != "" &&
      $("#last_name").val() != "" &&
      $("#email").val() != "" &&
      $("#password").val() != "" &&
      $("#re_enter_password").val() != ""
    ) {
      // Show the modal
      $("#submit_modal").modal("show");
      localStorage.setItem("logged_in", 1);
    }
  });

  $("#switch_button").click(function (event) {
    if (localStorage.getItem("logged_in") == 1) {
      localStorage.setItem("first_name", $("#first_name").val());
      $("#signup_login").text("Welcome " + $("#first_name").val());
    }
  });
});
