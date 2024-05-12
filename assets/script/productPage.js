const body = document.querySelector("body");

// const item = document.querySelectorAll(".product-page-item");

const totalContent = document.querySelector(".total-content-img");

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  const track = document.querySelector(".product-page-track");
  const items = document.querySelectorAll(".product-page-item");

  const totalContent = document.querySelector(".total-content-img");

  let i = 0;

  totalContent.innerHTML = `1 / ${items.length}`;

  const itemWidth = items[0].offsetWidth;

  prevBtn.addEventListener("click", () => {
    i = Math.max(i - 1, 0);
    track.style.transform = `translateX(-${i * itemWidth}PX)`;
  });

  nextBtn.addEventListener("click", () => {
    i = Math.min(i + 1, items.length - 1);
    track.style.transform = `translateX(-${i * itemWidth}px)`;
  });
});
