const PATHS = {
  LAYOUT: {
    LANDING: (): string => '/auth',
    APPLAYOUT: (): string => '/'
  },
  PAGE: {
    DASHBOARD: (): string => '/',
    SIGN_IN: (): string => '/sign-in',
    SIGN_UP: (): string => '/sign-up',
    NOT_FOUND: (): string => '/not-found'
  },
  SPECIAL: {
    EMPTY: (): string => '',
    ROOT: (): string => '/',
    REST: (): string => '*'
  }
};

export default PATHS;
