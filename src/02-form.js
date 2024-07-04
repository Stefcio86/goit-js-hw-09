import './css/02-form.css';
const form = document.querySelector('.feedback-form');
const emailInput = document.getElementById('email');
const messageTextarea = document.getElementById('message');

const formStyle = `
    .feedback-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 0;
        margin: 0px 200px;
    }

    .form-label {
        font-weight: bold;
        margin-bottom: 4px;
    }

    #email, #message {
        width: 360px;
        height: 40px;
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    #message {
        height: 80px;
        resize: none;
    }

    #submitBtn {
        width: 95px;
        height: 40px;
        border-radius: 8px;
        padding: 8px 16px; 
        background-color: #4E75FF;
        color: #FFFFFF;
        align-self: start; 
        cursor: pointer; 
        border: none;
        font-size: 14px;
    }
`;

const styleElement = document.createElement('style');
styleElement.textContent = formStyle;
document.head.appendChild(styleElement);

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
