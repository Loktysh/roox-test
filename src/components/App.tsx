import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import NotFoundPage from './Pages/NotFoundPage';
import UserPage from './Pages/UserPage';
import UsersPage from './Pages/UsersPage';
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
