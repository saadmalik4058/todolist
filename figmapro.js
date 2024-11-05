let password = document.getElementById("input");
let label = document.getElementById("show");
let btn = document.getElementById("btn");

function hide() {
  if (password.type === "password") {
    password.type = "text";
    label.innerHTML = "hide";
  } else {
    password.type = "password";
    label.innerHTML = "Show";
    console.log(label.innerHTML);
  }
}
let mymailpass = {
  email: "saadmalik123@gmail.com",
  password: 12345678,
};
let emailinput = document.getElementById("emailinput");
function log() {
  if (
    emailinput.value == mymailpass.email &&
    password.value == mymailpass.password
  ) {
    window.location.href = "./dashboard.html";
  } else {
    alert("Please enter correct password");
  }
}
