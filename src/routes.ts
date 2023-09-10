import { HomePage } from './pages/home';

export interface IRoute {
  path: string;
  name: string;
  component: React.FC;
  authGuard: boolean;
  noAuthGuard: boolean;
}

export const paths = {
  home: '/',
  features: '/#features',
  pricing: '/#pricing',
  analytics: '/#analytics',
  faq: '/#faq',
};

export const pageRoutes: IRoute[] = [
  {
    path: paths.home,
    name: 'Home Page',
    component: HomePage,
    authGuard: false,
    noAuthGuard: false,
  },
  // {
  //   path:paths.features,
  //   name:'Features Page',
  //   component:
  //   authGuard:false,
  //   noAuthGuard: false
  // }
];
