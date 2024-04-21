document.addEventListener("DOMContentLoaded", () => {
    const passwordInput1 = document.getElementById("password1");
    const passwordInput2 = document.getElementById("password2");
    const btnPassword1 = document.getElementById("toogle-password1");
    const btnPassword2 = document.getElementById("toogle-password2");
  
    const eye = document.getElementById("eye");
  
    btnPassword1.addEventListener("click", () => {
      if (passwordInput1.type === "password") {
        passwordInput1.type = "text";
        eye.classList.remove("fa", "fa-eye-slash");
        eye.classList.add("fa", "fa-eye");
      } else {
        passwordInput1.type = "password";
        eye.classList.remove("fa", "fa-eye");
        eye.classList.add("fa", "fa-eye-slash");
      }
    });
    
    btnPassword2.addEventListener("click", () => {
        if (passwordInput2.type === "password") {
          passwordInput2.type = "text";
          eye.classList.remove("fa", "fa-eye-slash");
          eye.classList.add("fa", "fa-eye");
        } else {
          passwordInput2.type = "password";
          eye.classList.remove("fa", "fa-eye");
          eye.classList.add("fa", "fa-eye-slash");
        }
      });
  
    const btnLogin = document.querySelector(".btn-login");
  
    btnLogin.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  });