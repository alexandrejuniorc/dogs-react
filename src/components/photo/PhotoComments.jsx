import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../hooks/userContext';
import { PhotoCommentsForm } from './PhotoCommentsForm';
import '../../scss/PhotoComments.scss';
import { useRef } from 'react';
import { useEffect } from 'react';

export const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className="comments">
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};
