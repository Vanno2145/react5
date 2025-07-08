import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="text-center p-5">
      <p>Нажмите кнопки ниже, чтобы открыть модальное окно авторизации/регистрации.</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Button as={Link} to="/login" variant="primary">
          Открыть Вход
        </Button>
        <Button as={Link} to="/register" variant="secondary">
          Открыть Регистрацию
        </Button>
      </div>
    </div>
  );
}

export default HomePage;