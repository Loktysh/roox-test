import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { fetchUsers } from '../../utils';
import NotFoundPage from './NotFoundPage';
import Favourite from '../favourite';
import { Spin } from 'antd';
import UserCard from './UserCard';

function UsersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    await fetchUsers().then(setUsers);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 1500);
  }, []);
  // console.log(searchParams.get('sort'));
  return (
    <>
      {users.map(userData => {
        return <UserCard key={userData.id} {...userData} />;
        // return <Product key={productData.id} {...productData} />;
      })}
    </>
  );
}

export default UsersPage;
