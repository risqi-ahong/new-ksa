const body = document.querySelector("body");

const totalContent = document.querySelector(".total-content-img");

const listSpesifikasi = document.querySelectorAll("li");
const linkSpesifikasi = document.querySelector(".link-spesifikasi");
const listParagraf = document.createElement("p");

const spesifikasi = document.querySelector(".spesifikasi-product");

const read = document.querySelector(".read");
const deskripsi = document.querySelector(".deskripsi");
const btnRead = document.querySelector(".btn-read");
const btnIcon = document.querySelector("#btn-icon");

if (deskripsi.clientHeight < 208) {
  btnRead.style.display = "none";
  read.style.border = "none";
} else {
  console.log(btnIcon.classList.add("fa fa-chevron-down"));
  console.log(btnIcon);
  btnRead.style.display = "inline-block";
  deskripsi.style.height = "12rem";
  document.addEventListener("click", (e) => {
    if (btnRead.contains(e.target)) {
      if (deskripsi.clientHeight <= 208) {
        deskripsi.style.height = "auto";
        btnRead.innerHTML = "Hide";
      } else {
        deskripsi.style.height = "12rem";
        btnRead.innerHTML = "In Full";
      }
    }
  });
}
const listArr = [...listSpesifikasi];
let list = listArr.map((listArr) => listArr.textContent);
list = list.slice(1);

listParagraf.innerHTML = list;

linkSpesifikasi.appendChild(listParagraf);

listParagraf.onclick = () => {
  spesifikasi.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (!spesifikasi.contains(e.target) && !listParagraf.contains(e.target)) {
    spesifikasi.classList.remove("active");
  }
});

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
