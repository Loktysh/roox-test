import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../../utils';
import './UserCard.css';
const UserForm = (props: any) => {
  console.log(props);
  return <div className='user-container'>123</div>;
};
const UserPage = (props: any) => {
  const { id } = useParams();
  console.log(id);
  const [userData, setUserData] = useState([]);
  const getUsers = async () => {
    await fetchUsers().then(setUserData);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return <UserForm data={userData[id - 1]} />;
};

export default UserPage;
