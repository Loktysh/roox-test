import { Routes, Route } from 'react-router-dom';
import Layout from './Commons/Layout';
import NotFoundPage from './Commons/NotFoundPage';
import UserPage from './Commons/UserPage';
import UsersPage from './Commons/UsersPage';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<UsersPage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='users/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
