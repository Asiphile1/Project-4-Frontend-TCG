document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  const confirmModal = document.getElementById('confirm-modal');
  const successModal = document.getElementById('success-modal');
  const confirmDetails = document.getElementById('confirm-details');
  const confirmYesBtn = document.getElementById('confirm-yes');
  const confirmNoBtn = document.getElementById('confirm-no');
  const successCloseBtn = document.getElementById('success-close');

  
  
  const dateInput = form.querySelector('#date');
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }


    const bookingData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      date: form.date.value,
      time: form.time.value,
      guests: form.guests.value,
    };

    confirmDetails.innerHTML = `
      <p><strong>Name:</strong> ${bookingData.name}</p>
      <p><strong>Email:</strong> ${bookingData.email}</p>
      <p><strong>Phone:</strong> ${bookingData.phone}</p>
      <p><strong>Date:</strong> ${bookingData.date}</p>
      <p><strong>Time:</strong> ${bookingData.time}</p>
      <p><strong>Guests:</strong> ${bookingData.guests}</p>
    `;

    openModal(confirmModal);

   
    
    confirmYesBtn.onclick = () => {
      closeModal(confirmModal);
      openModal(successModal);

      
      
      console.log('Booking Details:');
      console.log(`Name: ${bookingData.name}`);
      console.log(`Email: ${bookingData.email}`);
      console.log(`Phone: ${bookingData.phone}`);
      console.log(`Date: ${bookingData.date}`);
      console.log(`Time: ${bookingData.time}`);
      console.log(`Guests: ${bookingData.guests}`);

      form.reset();
    };

    confirmNoBtn.onclick = () => {
      closeModal(confirmModal);
    };
  });

  successCloseBtn.addEventListener('click', () => {
    closeModal(successModal);
  });


  
  function openModal(modal) {
    modal.classList.add('active');
  }

  function closeModal(modal) {
    modal.classList.remove('active');
  }

 
  
  [confirmModal, successModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });
});
