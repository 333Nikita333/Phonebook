import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';

import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Wrapper>
        <AppBar />

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Wrapper>
      <Toaster position="top" reverseOrder={false} />
    </>
  );
};

export default Layout;
