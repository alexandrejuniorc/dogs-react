import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Header.scss';
import { ReactComponent as Dogs } from '../assets/dogs.svg';

export const Header = () => {
  return (
    <header className="header">
      <nav className="container nav">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};
