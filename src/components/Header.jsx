import '../scss/Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../assets/dogs.svg';
import { UserContext } from '../hooks/userContext';
import { useContext } from 'react';

export const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className="header">
      <nav className="container nav">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="loginHeader" to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className="loginHeader" to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};
