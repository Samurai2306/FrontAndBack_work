import { useState } from 'react'
import './RegistrationForm.css'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Некорректный формат email');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) {
      return;
    }
    console.log('Данные формы:', formData);
    alert(`Регистрация успешна!\nИмя: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="registration-form-container">
      <h3>Форма регистрации</h3>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`form-input ${emailError ? 'error' : ''}`}
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="form-input"
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={!!emailError}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;

