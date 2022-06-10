import { useEffect } from 'react';
import { PHOTOS_GET } from '../../api/Api';
import { useFetch } from '../../hooks/useFetch';
import { FeedPhotosItem } from './FeedPhotosItem';
import { Error } from '../helper/Error';
import { Loading } from '../helper/Loading';
import '../../scss/FeedPhotos.scss';

export const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });

      const { response, json } = await request(url, options);
      console.log(json);
      if (response && response.ok && json.length < total) setInfinite(false);
    };
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className="feed anime-left">
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};
