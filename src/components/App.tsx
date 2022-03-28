import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Commons/Layout/Layout';
import NotFoundPage from './Commons/NotFoundPage';
import UserPage from './Commons/UserPage/UserPage';
import UsersPage from './Commons/UsersPage/UsersPage';
import 'antd/dist/antd.css';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to='users?sort=city' />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='users/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
