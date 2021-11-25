import { Link, useNavigate, useParams } from 'react-router-dom';
import allPosts from '../data/allPosts';
import users from '../data/users';

const userPosts = () => {
  const { id } = useParams<'id'>();

  const posts = allPosts.filter((item) => item.userId === Number(id));
  return (
    <>
      {/* eslint-disable-next-line no-shadow */}
      {posts.map(({ id, title }) => (
        <Link to={`/posts/${id}`}>{title}</Link>
      ))}
    </>
  );
};

export default userPosts;
