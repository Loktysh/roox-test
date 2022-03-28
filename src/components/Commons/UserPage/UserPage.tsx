import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../../../utils';
import { Spin } from 'antd';
import NotFoundPage from '../NotFoundPage';
import UserForm from '../UserForm/UserForm';
import '../UserCard/UserCard.css';

const UserPage = (props: any) => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const getUsers = async () => {
    await fetchUsers().then(setUserData);
  };

  useEffect(() => {
    getUsers();
  }, []);
  if (!userData.length) {
    return <Spin size='large' />;
  }
  if (id !== undefined) {
    return parseInt(id) >= 0 ? <UserForm {...userData[parseInt(id) - 1]} /> : <NotFoundPage />;
  }
  return <NotFoundPage />;
};

export default UserPage;
