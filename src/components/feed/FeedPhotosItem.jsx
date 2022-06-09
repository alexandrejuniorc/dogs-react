import '../../scss/FeedPhotosItem.scss';

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className="photo" onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className="visualizacao">{photo.acessos}</span>
    </li>
  );
};
