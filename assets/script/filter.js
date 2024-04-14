const items = {
  Category: [
    "PRODUCTS FOR EXTERIORS",
    "ACID CURED",
    "NITROCELLULOSE",
    "ADDITIVES OILS AND OTHERS",
    "POLYURETHANES",
    "THINNERS",
    "PIGMENTS COLOURANTS AND STAINS",
    "RED-OX POLYESTERS",
    "UV CURABLE",
    "WATER-BASED FOR INTERIORS",
  ],
  Lokasi: ["Semarang", "Jakarta", "Surabaya", "Bali", "Cirebon"],
};

const itemsContainer = document.getElementsByClassName("filter-side");
// const category = document.getElementsByClassName("category");

Object.entries(items).map(([category, itemList]) => {
  const categoryHeading = document.createElement("h2");
  categoryHeading.textContent =
    category.charAt(0).toUpperCase() + category.slice(1);

  const itemListElement = document.createElement("ul");

  const itemElements = itemList.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  });

  itemElements.map((itemElement) => {
    itemListElement.appendChild(itemElement);
  });

//   itemsContainer.appendChild(categoryHeading);
//   itemsContainer.appendChild(itemListElement);
});