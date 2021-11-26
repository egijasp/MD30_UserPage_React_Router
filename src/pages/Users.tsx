import { Link, useSearchParams } from 'react-router-dom';
import users from '../data/users';
import '../styles/Users.scss';

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>

      <div className="heading__users">
        <h1 className="heading1">LIST OF USERS</h1>
      </div>
      <div>
        <span>Search</span>
        <input
          type="search"
          value={searchParams.get('filter') || ''}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
      </div>
      <div className="users__container">
        {users.filter((user) => {
          const filter = searchParams.get('filter') || '';
          if (!filter) return true;
          const name = user.username.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
          .map(({ id, username }) => (
            <Link className="link" key={id} to={`/users/${id}`}>
              <h3 className="heading3">
                {id}
                {' '}
                {username}
              </h3>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Users;
