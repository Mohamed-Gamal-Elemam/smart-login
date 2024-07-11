document.getElementById("userName").innerHTML =
  localStorage.getItem("userName");

document.getElementById("logOut").addEventListener("click", function () {
  localStorage.removeItem("userName");
  location.href = "../index.html";
});
