import { useEffect, useState, useCallback } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { fetchUsers, sortUsers } from '../../utils';
import NotFoundPage from './NotFoundPage';
import Favourite from '../favourite';
import { Spin } from 'antd';
import UserCard from './UserCard';
import './UsersPage.css';

function UsersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = useCallback(async () => {
    await fetchUsers().then(users => {
      const sortedUsers = sortUsers(users, searchParams.get('sort'));
      setUsers(sortedUsers);
    });
    setLoading(false);
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getUsers();
    }, 1500);
    return searchParams.get('sort');
  }, [getUsers, searchParams]);

  return (
    <div className='users-container'>
      <h1 key={'title'}>Список пользователей</h1>
      {loading ? (
        <Spin size='large' />
      ) : (
        users.map(userData => {
          return <UserCard key={userData.id} {...userData} />;
        })
      )}
    </div>
  );
}

export default UsersPage;
