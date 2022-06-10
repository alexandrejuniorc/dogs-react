import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';
import '../../scss/PhotoContent.scss';
import { PhotoComments } from './PhotoComments';
import { PhotoDelete } from './PhotoDelete';

export const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  return (
    <div className="photoContent">
      <div className="imgContent">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="detailsContent">
        <div>
          <p className="authorContent">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

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
