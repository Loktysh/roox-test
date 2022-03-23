import { Outlet, Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './Layout.css';

function Layout() {
  return (
    <main>
      <nav>
        <h1>Сортировка</h1>
        <Link to='/users?sort=city'>по городу</Link>
        <Link to='/users?sort=name'>по компании</Link>
      </nav>
      <Outlet />
    </main>
  );
}

export default Layout;
