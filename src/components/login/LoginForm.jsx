import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../form/Button';
import { Input } from '../form/Input';
import { useForm } from '../../hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api/Api';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../hooks/userContext';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation of the username and password, if the user exists it will fetch
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
