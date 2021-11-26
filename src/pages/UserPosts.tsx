import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import allPosts from '../data/allPosts';
import users from '../data/users';
import '../styles/UserPosts.scss';

const userPosts = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('/404');
    }
  }, [id]);

  const posts = allPosts.filter((item) => item.userId === Number(id));
  return (
    <div className="user__posts-container">
      <h1 className="heading1">{`${users[Number(id) - 1].name} posts:`}</h1>
      <div className="user__posts">
        {posts.map(({ title, body }) => (
          <div>
            <h3 className="heading3 heading3-posts">{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
      <button onClick={() => {
        navigate('/users');
      }}
      >
        Back To Users Page
      </button>
    </div>
  );
};

export default userPosts;
