const dev = {
  TITLE: 'Development environment'
};

const pre = {
  TITLE: 'Preproduction environment'
};

const prod = {
  TITLE: 'Production environment'
};

console.log(process.env.REACT_APP_STAGE);

const config = process.env.REACT_APP_STAGE === 'pro' ? prod : process.env.REACT_APP_STAGE === 'pre' ? pre : dev;

export const ENVIRONMENT = {
  COMMON: 'Common config',
  ...config
};
