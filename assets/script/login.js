document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const btnPassword = document.getElementById("toogle-password");

  const eye = document.getElementById("eye");

  btnPassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eye.classList.remove("fa", "fa-eye-slash");
      eye.classList.add("fa", "fa-eye");
    } else {
      passwordInput.type = "password";
      eye.classList.remove("fa", "fa-eye");
      eye.classList.add("fa", "fa-eye-slash");
    }
  });

  const btnRegister = document.querySelector(".btn-register");

  btnRegister.addEventListener("click", () => {
    window.location.href = "register.html";
  });
});
