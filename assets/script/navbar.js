const navbarHtml = `<nav class="navbar-wrapper">
<div class="navbar-top">
  <div class="content-top">
    <p>Welcome to PT. Kreasi Sentosa Abadi Store</p>
  </div>
  <div class="link-top">
    <div class="icon-user">
      <i class="fa fa-user"></i>
      <i class="fa fa-chevron-down"></i>
    </div>
  </div>
  <div class="link-user">
    <a href="login.html">Login</a>
    <a href="register.html">Register</a>
  </div>
</div>
<div class="navbar-bottom">
  <div class="navbar-logo">
    <a href="index.html">
      <img src="./assets/ksa-logo.png" alt="" />
    </a>
  </div>
  <div class="navbar-link">
    <div class="closed">
      <i class="fa-solid fa-x"></i>
    </div>
    <a href="index.html">HOME</a>
    <a href="product.html"> PRODUCT </a>
    <a href="galery.html">GALERY</a>
    <a href="store.html">STORE</a>
  </div>
  <div class="navbar-extra">
    <input type="hidden" id="input-search" />
    <div class="search">
      <i class="fa fa-magnifying-glass"></i>
    </div>
    <a href="myBag.html">
      <i class="fa fa-cart-shopping"></i>
    </a>
    <div id="menu">
      <li class="fa fa-bars"></li>
    </div>
  </div>
</div>
</nav>`;

const navbar = (document.getElementById("navbar-container").innerHTML =
  navbarHtml);

const linkTop = document.querySelector(".link-top");
const linkUser = document.querySelector(".link-user");

const menu = document.querySelector("#menu");
const navbarLink = document.querySelector(".navbar-link");
const closeMenu = document.querySelector(".closed");

const search = document.querySelector(".search");
const inputSearch = document.querySelector("#input-search");

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !closeMenu.contains(e.target)) {
    navbarLink.style.right = "-100%";
  }
});

search.onclick = () => {
  inputSearch.type = "text";
};

document.addEventListener("click", (e) => {
  if (!search.contains(e.target) && !inputSearch.contains(e.target)) {
    inputSearch.type = "hidden";
  }
});

linkTop.onclick = () => {
  linkUser.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (!linkTop.contains(e.target) && !linkUser.contains(e.target)) {
    linkUser.classList.remove("active");
  }
});

menu.onclick = () => {
  navbarLink.style.right = "0";
};

closeMenu.onclick = () => {
  navbarLink.style.right = "-100%";
};

const navbarBottom = document.querySelector(".navbar-bottom");

window.addEventListener("scroll", function () {
  var scrollY = window.scrollY;
  if (scrollY > 100) {
    navbarBottom.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    navbarBottom.style.bordedrBottom = "1px solid rgba(222, 206, 204, 0.5)";
  } else {
    navbarBottom.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    navbarBottom.style.bordedrBottom = "1px solid rgba(222, 206, 204, 0.1)";
  }
});
