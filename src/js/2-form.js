import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  let formData = {
    email: '',
    message: '',
  };

  function saveToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  function populateForm() {
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    formData = savedFormData;
    populateForm();
  }

  form.addEventListener('input', function (event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveToLocalStorage();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    form.reset();
  });
});
