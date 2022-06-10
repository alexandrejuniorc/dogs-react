import { useState } from 'react';
import '../../scss/Image.scss';

export const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className="wrapperImage">
      {skeleton && <div className="skeleton"></div>}

      <img onLoad={handleLoad} className="imgComponent" alt={alt} {...props} />
    </div>
  );
};
