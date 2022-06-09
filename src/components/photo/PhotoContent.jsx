import { Link } from 'react-router-dom';
import '../../scss/PhotoContent.scss';
import { PhotoComments } from './PhotoComments';

export const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div className="photoContent">
      <div className="imgContent">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="detailsContent">
        <div>
          <p className="authorContent">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="visualizacoes">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="attributesContent">
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>

      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};
