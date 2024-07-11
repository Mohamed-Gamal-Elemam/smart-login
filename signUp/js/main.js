var nameSup = document.getElementById("nameUp");
var emailSup = document.getElementById("emailUp");
var passSup = document.getElementById("passUp");

var che = false;
var allacc = [];
if (localStorage.getItem("allaccounts") != null) {
  allacc = JSON.parse(localStorage.getItem("allaccounts"));
}
function addNweacc() {
  if (nameSup.value == "" || emailSup.value == "" || passSup.value == "") {
    document.getElementById("requiredMess").classList.remove("d-none");
  } else if (checkDubl() === true) {
    document.getElementById("emailMess").classList.remove("d-none");
  }

  // ===
  else {
    document.getElementById("emailMess").classList.add("d-none");
    document.getElementById("requiredMess").classList.add("d-none");
    var account = {
      userName: nameSup.value,
      Email: emailSup.value,
      password: passSup.value,
    };
    allacc.push(account);
    location.href = "../index.html";
    localStorage.setItem("allaccounts", JSON.stringify(allacc));
  }
}

function checkDubl() {
  for (var i = 0; i < allacc.length; i++) {
    if (allacc[i].Email == emailSup.value) {
      return true;
    }
  }
}
