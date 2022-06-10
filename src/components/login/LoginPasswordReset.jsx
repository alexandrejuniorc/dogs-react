import { useEffect } from 'react';
import { useState } from 'react';
import { Input } from '../form/Input';
import { Button } from '../form/Button';
import { useForm } from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';
import { PASSWORD_RESET } from '../../api/Api';
import { Error } from '../helper/Error';
import { useNavigate } from 'react-router-dom';

export const LoginPasswordReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');

  const navigate = useNavigate();
  const password = useForm();
  const { error, loading, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <div>
      <Head title="Resete a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};
