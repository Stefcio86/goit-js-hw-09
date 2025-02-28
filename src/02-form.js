import './css/02-form.css';
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements['email'];
  const messageTextarea = form.elements['message'];
  const STORAGE_KEY = 'feedback-form-state';

  const saveToLocalStorage = () => {
    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };

  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      emailInput.value = email || '';
      messageTextarea.value = message || '';
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  form.addEventListener('input', saveToLocalStorage);

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };

    if (formData.email && formData.message) {
      console.log('Submitted:', formData);

      form.reset();
      clearLocalStorage();
    } else {
      alert('Please fill in both fields.');
    }
  });

  loadFromLocalStorage();
});
