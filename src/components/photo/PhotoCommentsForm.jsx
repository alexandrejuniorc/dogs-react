import { useState } from 'react';
import { COMMENT_POST } from '../../api/Api';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../helper/Error';
import '../../scss/PhotoCommentsForm.scss';

export const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment([]);
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <form className="formComment" onSubmit={handleSubmit}>
      <textarea
        className="textarea"
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className="buttonForm">
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};
