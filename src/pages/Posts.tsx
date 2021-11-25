import { Link } from 'react-router-dom';
import allPosts from '../data/allPosts';
import '../styles/Posts.scss';

const Posts = () => {
  console.log(123);

  return (
    <>
      <div className="posts__heading-wrapper">
        <h1 className="heading1">LIST OF POSTS</h1>
      </div>
      <div className="posts__container">
        {allPosts.map(({ title, id }) => (
          <Link className="link link-posts" key={id} to={`/post/${id}`}>
            <h3 className="heading3">
              {id}
              .
              {' '}
              {title}
            </h3>
          </Link>
        ))}

      </div>
    </>
  );
};

export default Posts;
