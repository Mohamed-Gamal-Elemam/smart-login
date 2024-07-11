var accounts = [];
accounts = JSON.parse(localStorage.getItem("allaccounts"));
var mailValue = document.getElementById("MailValue");
var passValue = document.getElementById("passValue");

var valideuser = false;

document.getElementById("loginbtn").addEventListener("click", function () {
  if (mailValue.value == "" || passValue.value == "") {
    document.getElementById("requiredMess").classList.remove("d-none");
    document.getElementById("incorrectMess").classList.add("d-none");
  } else {
    checkuser();
    if (valideuser == true) {
      console.log("hello");
    } else {
      document.getElementById("requiredMess").classList.add("d-none");
      document.getElementById("incorrectMess").classList.remove("d-none");
      console.log("hello");
    }
  }
});

function checkuser() {
  for (var i = 0; i < accounts.length; i++) {
    if (
      mailValue.value == accounts[i].Email &&
      passValue.value == accounts[i].password
    ) {
      var acc = accounts[i].userName;
      localStorage.setItem("userName", acc);
      // location.href = "../welcome/welcome.html";;
      window.location.replace('https://' + window.location.hostname + '/Smart-Login-System/welcome/welcome.html');
      var valideuser = true;
      break;
    }
  }
}
