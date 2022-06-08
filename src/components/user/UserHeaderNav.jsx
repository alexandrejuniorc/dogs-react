import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';
import { ReactComponent as MinhasFotos } from '../../assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';
import '../../scss/UserHeaderNav.scss';
import { useState } from 'react';
import { useMedia } from '../../hooks/useMedia';
import { useEffect } from 'react';

export const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${'mobileButton'} ${mobileMenu && 'mobileButtonActive'}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? 'navMobile' : 'navUser'} 
        ${mobileMenu && 'navMobileActive'}`}
      >
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
    </>
  );
};
