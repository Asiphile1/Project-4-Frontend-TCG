export function openModal(modal) {
  modal.classList.add('active');
}

export function closeModal(modal) {
  modal.classList.remove('active');
}

export function setupModalClose(modal, closeBtn) {
  closeBtn.addEventListener('click', () => closeModal(modal));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });
}
