const body = document.querySelector(".body");

const btnProduct = document.querySelector("#product");

btnProduct.onclick = () => {
  window.location.href = "product.html";
};

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const track = document.querySelector(".hero-track");
  const items = document.querySelectorAll(".hero-item");

  const totalItems = items.length;

  let i = 0;

  const itemWidth = items[0].offsetWidth;

  function prev() {
    i = Math.max(i - 1, 0);
    track.style.transform = `translateX(-${i * itemWidth}px)`;
    track.style.transition = "0.8s";
  }

  function next() {
    i = Math.min(i + 1, items.length - 1);
    track.style.transform = `translateX(-${i * itemWidth}px)`;
    track.style.transition = "0.8s";
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  setInterval(() => {
    if (i < items.length - 1) {
      next();
    } else {
      i = -1;
      next();
    }
  }, 3000);
});
