import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api/Api';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../helper/Error';
import { Loading } from '../helper/Loading';
import { PhotoContent } from '../photo/PhotoContent';

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};
