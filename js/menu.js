document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementById("menu-list");
  const modal = document.getElementById("menu-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalPrice = document.getElementById("modal-price");
  const modalImage = document.getElementById("modal-image");
  const modalClose = document.getElementById("menu-modal-close");

  const menuItems = [
    {
      id: 1,
      name: "Boerewors Chakalaka and Pap",
      price: "R112.99",
      description:
        "Fresh greens topped with grilled chicken, cherry tomatoes, and house dressing.",
      imageSrc: "images/boerewors.jpg",
    },
    {
      id: 2,
      name: "Braai Meat",
      price: "R215.99",
      description:
        "Classic Italian pasta with rich meat sauce and parmesan cheese.",
      imageSrc: "images/braai-meat.jpg",
    },
    {
      id: 3,
      name: "Bunny Chow",
      price: "R114.50",
      description:
        "Thin crust pizza topped with fresh mozzarella, tomato sauce, and basil.",
      imageSrc: "images/bunny-chow.jpg",
    },
    {
      id: 4,
      name: "Amagwinya with mince",
      price: "R87.99",
      description:
        "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
      imageSrc: "images/amagwinya.jpg",
    },
    {
      id: 1,
      name: "Boerewors Chakalaka and Pap",
      price: "R112.99",
      description:
        "Fresh greens topped with grilled chicken, cherry tomatoes, and house dressing.",
      imageSrc: "images/boerewors.jpg",
    },
    {
      id: 2,
      name: "Braai Meat",
      price: "R215.99",
      description:
        "Classic Italian pasta with rich meat sauce and parmesan cheese.",
      imageSrc: "images/braai-meat.jpg",
    },
    {
      id: 3,
      name: "Bunny Chow",
      price: "R114.50",
      description:
        "Thin crust pizza topped with fresh mozzarella, tomato sauce, and basil.",
      imageSrc: "images/bunny-chow.jpg",
    },
    {
      id: 4,
      name: "Amagwinya with mince",
      price: "R87.99",
      description:
        "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
      imageSrc: "images/amagwinya.jpg",
    },
  ];


  menuItems.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.tabIndex = 0;
    div.innerHTML = `
      <img src="${item.imageSrc}" alt="${item.name}" class="menu-item-image" />
      <h3>${item.name}</h3>
      <p class="price">${item.price}</p>
    `;
    div.addEventListener("click", () => openMenuModal(item));
    div.addEventListener("keypress", (e) => {
      if (e.key === "Enter") openMenuModal(item);
    });
    menuList.appendChild(div);
  });

  function openMenuModal(item) {
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    modalPrice.textContent = item.price;
    modalImage.src = item.imageSrc;
    modalImage.alt = item.name;
    modal.classList.add("active");
  }

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
