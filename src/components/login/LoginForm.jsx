import { Link } from 'react-router-dom';
import { Button } from '../form/Button';
import { Input } from '../form/Input';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { UserContext } from '../../hooks/userContext';
import { Error } from '../helper/Error';
import '../../scss/LoginForm.scss';
import '../../scss/Button.scss';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation of the username and password, if the user exists it will fetch
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };
  return (
    <section className="anime-left">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className="perdeu" to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className="cadastro">
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};
