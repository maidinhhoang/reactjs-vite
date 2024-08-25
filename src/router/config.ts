import AppLayout from '@/layouts/private/AppLayout';
import LandingLayout from '@/layouts/public/LandingLayout';
import { AppError, AppNotFound, AppPermissionDenied, Dashboard, SignIn, SignUp } from '@/pages';
import { TRouteConfig } from '@/router';

import PATHS from './paths';

const routerConfig: TRouteConfig = {
  common: {
    appError: AppError,
    appNotFound: AppNotFound,
    appPermissionDenied: AppPermissionDenied
  },
  routes: [
    {
      path: PATHS.LAYOUT.LANDING(),
      element: {
        component: LandingLayout
      },
      children: [
        {
          path: PATHS.PAGE.SIGN_IN(),
          element: {
            component: SignIn
          }
        },
        {
          path: PATHS.PAGE.SIGN_UP(),
          element: {
            component: SignUp
          }
        }
      ]
    },
    {
      path: PATHS.LAYOUT.APPLAYOUT(),
      element: {
        component: AppLayout,
        isPrivate: true
      },
      children: [
        {
          path: PATHS.PAGE.DASHBOARD(),
          element: {
            component: Dashboard,
            isPrivate: true
          }
        }
      ]
    }
  ]
};

export default routerConfig;
