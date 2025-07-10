
export const environment = {
  production: false,
  database: {
    host: 'localhost',
    port: 3306,
    username: 'dev_user',
    password: 'dev_password',
    database: 'my_angular_dev_db',
    connectionLimit: 10,
    acquireTimeout: 60000,
    timeout: 60000
  },
  apiUrl: 'http://0.0.0.0:4000/api'
};
