document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menu-list');
  const modal = document.getElementById('menu-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalPrice = document.getElementById('modal-price');
  const modalClose = document.getElementById('menu-modal-close');

  // Sample menu data
  const menuItems = [
    {
      id: 1,
      name: 'Grilled Chicken Salad',
      price: '$12.99',
      description: 'Fresh greens topped with grilled chicken, cherry tomatoes, and house dressing.',
    },
    {
      id: 2,
      name: 'Spaghetti Bolognese',
      price: '$15.99',
      description: 'Classic Italian pasta with rich meat sauce and parmesan cheese.',
    },
    {
      id: 3,
      name: 'Margherita Pizza',
      price: '$14.50',
      description: 'Thin crust pizza topped with fresh mozzarella, tomato sauce, and basil.',
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      price: '$7.99',
      description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
    }
  ];

  // Render menu items
  menuItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    div.tabIndex = 0; // Make focusable for accessibility
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p class="price">${item.price}</p>
    `;
    div.addEventListener('click', () => openMenuModal(item));
    div.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') openMenuModal(item);
    });
    menuList.appendChild(div);
  });

  function openMenuModal(item) {
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    modalPrice.textContent = item.price;
    modal.classList.add('active');
  }

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
