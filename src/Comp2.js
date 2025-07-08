import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="registerName">
        <Form.Control
          type="text"
          placeholder="Ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerEmail">
        <Form.Control
          type="email"
          placeholder="Електронна адреса"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerPassword">
        <Form.Control
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerConfirmPassword">
        <Form.Control
          type="password"
          placeholder="Повторить Пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 mb-3">
        Зареєструватися
      </Button>

      <p className="text-center text-muted small mb-3">
        Реєструючись — Ви автоматично погоджуєтесь з політикою конфіденційності
        та умови використання
      </p>

      <Button variant="outline-secondary" className="w-100">
        Авторизуватись через Google
      </Button>
    </Form>
  );
}

export default RegisterForm;