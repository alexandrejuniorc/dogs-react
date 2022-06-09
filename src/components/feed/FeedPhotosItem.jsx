import '../../scss/FeedPhotosItem.scss';

export const FeedPhotosItem = ({ photo }) => {
  return (
    <li className="photo">
      <img src={photo.src} alt={photo.title} />
      <span className="visualizacao">{photo.acessos}</span>
    </li>
  );
};
