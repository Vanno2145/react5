import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Control
          type="email"
          placeholder="Електронна адреса"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Control
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 mb-3">
        Увійти
      </Button>

      <div className="text-center mb-3">
        <a href="#" className="text-decoration-none text-muted">
          Забули пароль?
        </a>
      </div>

      <Button variant="outline-secondary" className="w-100">
        Авторизуватись через Google
      </Button>
    </Form>
  );
}

export default LoginForm;