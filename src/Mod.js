// src/AuthModal.jsx
import React from 'react';
import { Modal, Nav, NavItem, NavLink } from 'react-bootstrap';
import { useLocation, Link, Outlet } from 'react-router-dom';

function AuthModal() {
  const location = useLocation();
  const isLoginMode = location.pathname === '/login';
  const isRegisterMode = location.pathname === '/register';

  const showModal = isLoginMode || isRegisterMode;


  const handleClose = () => {
    window.history.back();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          {isLoginMode ? 'Вхід' : 'Реєстрація'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Nav variant="tabs" className="mb-3 justify-content-center">
          <NavItem>
            <NavLink
              active={isLoginMode}
              as={Link} 
              to="/login"
              style={{ cursor: 'pointer' }}
            >
              Вхід
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={isRegisterMode}
              as={Link} 
              to="/register"
              style={{ cursor: 'pointer' }}
            >
              Реєстрація
            </NavLink>
          </NavItem>
        </Nav>

        <Outlet />
      </Modal.Body>
    </Modal>
  );
}

export default AuthModal;