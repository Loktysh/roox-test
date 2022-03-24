import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../../utils';
import { Spin } from 'antd';
import UserForm from './UserForm';
import './UserCard.css';

const UserPage = (props: any) => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const getUsers = async () => {
    await fetchUsers().then(setUserData);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return !userData.length ? <Spin size='large' /> : <UserForm data={userData[id - 1]} />;
};

export default UserPage;
