document.addEventListener("DOMContentLoaded", () => {
  const passwordInput1 = document.getElementById("password1");
  const passwordInput2 = document.getElementById("password2");
  const btnPassword1 = document.getElementById("toogle-password1");
  const btnPassword2 = document.getElementById("toogle-password2");

  const eye1 = document.getElementById("eye1");
  const eye2 = document.getElementById("eye2");

  btnPassword1.addEventListener("click", () => {
    if (passwordInput1.type === "password") {
      passwordInput1.type = "text";
      eye1.classList.remove("fa", "fa-eye-slash");
      eye1.classList.add("fa", "fa-eye");
    } else {
      passwordInput1.type = "password";
      eye1.classList.remove("fa", "fa-eye");
      eye1.classList.add("fa", "fa-eye-slash");
    }
  });

  btnPassword2.addEventListener("click", () => {
    if (passwordInput2.type === "password") {
      passwordInput2.type = "text";
      eye2.classList.remove("fa", "fa-eye-slash");
      eye2.classList.add("fa", "fa-eye");
    } else {
      passwordInput2.type = "password";
      eye2.classList.remove("fa", "fa-eye");
      eye2.classList.add("fa", "fa-eye-slash");
    }
  });

  const btnLogin = document.querySelector(".btn-login");

  btnLogin.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});
