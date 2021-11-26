import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import users from '../data/users';
import '../styles/User.scss';

const initialUser = {
  id: 0,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
  },
  phone: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

const User = () => {
  const [user, setUser] = useState(initialUser);
  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }

    const matchedUsers = users.find((item) => item.id === Number(id));

    if (matchedUsers) {
      setUser(matchedUsers);
      return;
    }

    navigate('../../404');
  }, [id]);

  const {
    name, username, email, address, phone, company,
  } = user;

  return (
    <>
      <div className="user__card">
        <div className="card__content">
          <h4 className="heading4">
            Username:&nbsp;
            <span className="span">{username}</span>
          </h4>
          <h4 className="heading4">
            Name:&nbsp;
            <span className="span">{name}</span>
          </h4>
          <h4 className="heading4">
            E-mail:&nbsp;
            <span className="span">{email}</span>
          </h4>
          <h4 className="heading4">
            Address:
            <br />
            street:&nbsp;
            <span className="span">{address.street}</span>
            <br />
            suite:&nbsp;
            <span className="span">{address.suite}</span>
            <br />
            city:&nbsp;
            <span className="span">{address.city}</span>
            <br />
            zipcode:&nbsp;
            <span className="span">{address.zipcode}</span>
          </h4>
          <h4 className="heading4">
            Phone:&nbsp;
            <span className="span">{phone}</span>
          </h4>
          <h4 className="heading4">
            Company:
            <br />
            Name:&nbsp;
            <span className="span">{company.name}</span>
            <br />
            CatchPhrase:&nbsp;
            <span className="span">{company.catchPhrase}</span>
            <br />
            Bs:&nbsp;
            <span className="span">{company.bs}</span>
          </h4>
        </div>
      </div>
      <button onClick={() => {
        navigate('user-posts');
      }}
      >
        See Blog Posts
      </button>
      <br />
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        GO BACK
      </button>
    </>
  );
};

export default User;
