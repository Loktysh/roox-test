import { Outlet, Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './Layout.css';

function Layout() {
  return (
    <main>
      <nav>
        <h1>Сортировка</h1>
        <button className='btn-primary'>
          <Link to='/users?sort=city'>по городу</Link>
        </button>
        <button className='btn-primary'>
          <Link to='/users?sort=name'>по компании</Link>
        </button>
      </nav>
      <Outlet />
    </main>
  );
}

export default Layout;
