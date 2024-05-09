const trash = document.querySelector(".trash");
const cardProduct = document.querySelector(".myBag-wrapper-product");
const edit = document.querySelector(".edit");

const qty = document.querySelector(".input-qty");
const btnMinus = document.querySelector(".btn-minus");
const btnPlus = document.querySelector(".btn-plus");

let i = 1;

qty.value = 1;

btnMinus.onclick = () => {
  if (qty.value != 0) {
    qty.value = i--;
  }
};

console.log(qty.value);
btnPlus.onclick = () => {
  qty.value = i++;
};

trash.onclick = () => {
  cardProduct.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (!trash.contains(e.target) && !edit.contains(e.target)) {
    cardProduct.classList.remove("active");
  }
});
