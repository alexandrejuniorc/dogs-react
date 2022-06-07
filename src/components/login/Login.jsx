import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';
import { LoginCreate } from './LoginCreate';
import { LoginForm } from './LoginForm';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset } from './LoginPasswordReset';
import '../../scss/Login.scss';

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className="login">
      <div className="forms">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};
