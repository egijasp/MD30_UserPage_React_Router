import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import allPosts from '../data/allPosts';
import '../styles/Post.scss';

const initialPost = {
  id: 0,
  userId: 0,
  title: '',
  body: '',
};

const Post = () => {
  const [post, setPost] = useState(initialPost);
  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }

    const matchedPost = allPosts.find((item) => item.id === Number(id));

    if (matchedPost) {
      setPost(matchedPost);
      return;
    }

    navigate('../../404');
  }, [id]);

  const { userId, title, body } = post;

  return (
    <div>
      <h1 className="heading1 heading1-post">{title}</h1>
      <div className="post__text">
        <span>
          Author:
          {userId}
        </span>
        <p className="paragraph">{body}</p>
      </div>
    </div>
  );
};

export default Post;
