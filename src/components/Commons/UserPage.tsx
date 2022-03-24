import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../../utils';
import UserForm from './UserForm';
import './UserCard.css';
import User from '../User/User';

const UserPage = (props: any) => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const getUsers = async () => {
    await fetchUsers().then(setUserData);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return !userData.length ? `<h1>'Loading...'</h1>` : <UserForm data={userData[id - 1]} />;
};

export default UserPage;
