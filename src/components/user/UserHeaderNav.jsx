import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';
import { ReactComponent as MinhasFotos } from '../../assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';
import '../../scss/UserHeaderNav.scss';
import { useState } from 'react';

export const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);

  const { userLogout } = useContext(UserContext);

  return (
    <nav className="navUser">
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <Adicionar />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};
