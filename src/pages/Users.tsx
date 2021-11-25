import { Link } from 'react-router-dom';
import users from '../data/users';
import '../styles/Users.scss';

const Users = () => (
  <>
    <div className="heading__users">
      <h1 className="heading1">LIST OF USERS</h1>
    </div>
    <div className="users__container">
      {users.map(({ id, username }) => (
        <Link className="link" key={id} to={`/users/${id}`}>
          <h3 className="heading3">
            {id}
            {' '}
            {username}
          </h3>
        </Link>
      ))}
    </div>
  </>
);
export default Users;
