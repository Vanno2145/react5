// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AuthModal from './AuthModal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <>
      <HomePage />
      <Routes>
        <Route path="/login" element={<AuthModal />}>
          <Route index element={<LoginForm />} /> 
        </Route>
        <Route path="/register" element={<AuthModal />}>
          <Route index element={<RegisterForm />} /> 
        </Route>

        <Route path="/" element={<></>} /> 
      </Routes>
    </>
  );
}
export default App;