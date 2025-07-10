
export const environment = {
  production: true,
  database: {
    host: process.env['DB_HOST'] || 'localhost',
    port: parseInt(process.env['DB_PORT'] || '3306'),
    username: process.env['DB_USERNAME'] || 'prod_user',
    password: process.env['DB_PASSWORD'] || 'prod_password',
    database: process.env['DB_NAME'] || 'my_angular_prod_db',
    connectionLimit: 20,
    acquireTimeout: 60000,
    timeout: 60000
  },
  apiUrl: process.env['API_URL'] || 'https://your-app.replit.app/api'
};
