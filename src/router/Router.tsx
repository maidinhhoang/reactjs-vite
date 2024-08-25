import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';

import { history, HistoryRouter, PATHS, PrivateRoute, PublicRoute, routerConfig, TRoute, TRouteElement } from '@/router';

const Router: React.FC = () => {
  const elementWrapper = (element: TRouteElement): JSX.Element => {
    const commonRouteProps = { component: element.component, errorComponent: element.errorComponent || routerConfig.common.appError };
    const publicRouteProps = { ...commonRouteProps };
    const privateRouteProps = {
      ...commonRouteProps,
      fallbackPermissionDeniedComponent: element.fallbackPermissionDenied || routerConfig.common.appPermissionDenied
    };
    const isPrivate = element.isPrivate;

    const wrappedElement = isPrivate ? (
      <PrivateRoute {...privateRouteProps} fallbackPermissionDeniedComponent={routerConfig.common.appPermissionDenied} />
    ) : (
      <PublicRoute {...publicRouteProps} />
    );
    return wrappedElement;
  };

  const renderRoutes = (routes: TRoute[]): JSX.Element[] => {
    return routes.map((route) => {
      const wrappedElement = elementWrapper(route.element);
      const commonRouteProps = { element: wrappedElement };

      return (
        <Route key={route.path} path={!route.children?.length ? route.path : undefined} {...commonRouteProps}>
          {route.children && renderRoutes(route.children)}
        </Route>
      );
    });
  };

  return (
    <HistoryRouter history={history}>
      <ErrorBoundary FallbackComponent={routerConfig.common.appError}>
        <Routes>
          {renderRoutes(routerConfig.routes)}
          <Route path={PATHS.SPECIAL.REST()} element={<PublicRoute component={routerConfig.common.appNotFound} />} />
        </Routes>
      </ErrorBoundary>
    </HistoryRouter>
  );
};

export default Router;
