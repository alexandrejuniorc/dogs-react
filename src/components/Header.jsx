import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Header.scss';
import { ReactComponent as Dogs } from '../assets/dogs.svg';
import { UserContext } from '../hooks/userContext';
/* import { useContext } from 'react'; */

export const Header = () => {
  /*   const context = useContext(UserContext);
  console.log(context); */

  return (
    <header className="header">
      <nav className="container nav">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">
          {/*  {context.usuario} */}
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};
