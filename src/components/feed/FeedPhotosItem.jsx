import '../../scss/FeedPhotosItem.scss';
import { Image } from '../helper/Image';

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className="photo" onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      {/*  <img src={photo.src} alt={photo.title} /> */}
      <span className="visualizacao">{photo.acessos}</span>
    </li>
  );
};
