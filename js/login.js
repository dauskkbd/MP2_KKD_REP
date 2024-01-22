$(document).ready(function () {
  if (localStorage.getItem("logged_in") == 1) {
    let name = localStorage.getItem("first_name");
    $("#log_in_link").text("Welcome " + name);
    $("#sign_out").text("Sign Out");
  } else {
    $("#log_in_link").text("Sign Up");
  }

  $("#sign_out").click(function () {
    localStorage.clear();
    $("#log_in_link").text("Sign Up");
    $("#sign_out").text("");
    window.location.href = "index.html";
  });
});
