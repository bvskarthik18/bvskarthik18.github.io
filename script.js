// Contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get('Name');
  const email = formData.get('Email');
  const message = formData.get('Message');

  // Validation (add more robust validation if needed)
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Send data to backend or perform other actions (for demonstration purposes, logging data)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Optionally, clear form fields after submission
  contactForm.reset();
});
