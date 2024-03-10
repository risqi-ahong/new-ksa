const body = document.querySelector(".body");

const linkTop = document.querySelector(".link-top");
const linkUser = document.querySelector(".link-user");

const menu = document.querySelector("#menu");
const navbarLink = document.querySelector(".navbar-link");
const closeMenu = document.querySelector(".closed");

const search = document.querySelector(".search");
const inputSearch = document.querySelector("#input-search");

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

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const track = document.querySelector(".hero-track");
  const items = document.querySelectorAll(".hero-item");

  let i = 0;

  const itemWidth = items[0].offsetWidth;

  prevBtn.addEventListener("click", () => {
    i = Math.max(i - 1, 0);
    track.style.transform = `translateX(-${i * itemWidth}px)`;
  });

  nextBtn.addEventListener(
    "click",
    () => {
      i = Math.min(i + 1, items.length - 1);
      track.style.transform = `translateX(-${i * itemWidth}px)`;
    },
    1000
  );
});
