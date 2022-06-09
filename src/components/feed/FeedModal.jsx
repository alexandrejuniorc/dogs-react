import '../../scss/FeedModal.scss';
import { useFetch } from '../../hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api/Api';
import { Error } from '../helper/Error';
import { Loading } from '../helper/Loading';
import { PhotoContent } from '../photo/PhotoContent';

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  const handleOutsideClick = (e) => {
    // console.log('Current: ', e.target);
    // console.log('Current Target: ', e.currentTarget);
    if (e.target === e.currentTarget) setModalPhoto(null);
  };

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className="feedModal" onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
