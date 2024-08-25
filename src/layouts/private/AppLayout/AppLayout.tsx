import { Outlet } from 'react-router-dom';

import { TAppLayoutProps } from './AppLayout.types';

import './AppLayout.scss';

const AppLayout: React.FC<TAppLayoutProps> = () => {
  return (
    <div className='AppLayout'>
      <Outlet />
    </div>
  );
};

export default AppLayout;
