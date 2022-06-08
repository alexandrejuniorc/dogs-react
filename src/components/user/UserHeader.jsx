import { UserHeaderNav } from './UserHeaderNav';
import '../../scss/UserHeader.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <header className="headerUser">
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
