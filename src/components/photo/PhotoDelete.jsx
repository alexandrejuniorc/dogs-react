import { PHOTO_DELETE } from '../../api/Api';
import { useFetch } from '../../hooks/useFetch';
import '../../scss/PhotoDelete.scss';

export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className="delete">
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className="delete">
          Deletar
        </button>
      )}
    </>
  );
};
