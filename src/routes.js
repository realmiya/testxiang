import Fakecontent from './pages/fakepage/fakecontent';
import Fakecontent2 from './pages/fakepage/fake2';

export const ROUTES = [
  // {
  //   key: 'dashboard',
  //   path: '/',
  //   page: 'dashboard',
  // },
  {
    key: 'fake',
    path: '/fake',
    page: Fakecontent,
  },
  {
    key: 'fake2',
    path: '/fake2',
    page: Fakecontent2,
  },
];
