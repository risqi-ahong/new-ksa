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
