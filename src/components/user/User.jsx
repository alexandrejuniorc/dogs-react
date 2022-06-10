import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../../error/NotFound';
import { UserContext } from '../../hooks/userContext';
import { Feed } from '../feed/Feed';
import { Head } from '../helper/Head';
import { UserHeader } from './UserHeader';
import { UserPhotoPost } from './UserPhotoPost';
import { UserStats } from './UserStats';

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
