import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// Environment configuration
const isDevelopment = process.env['NODE_ENV'] !== 'production';
const environment = isDevelopment 
  ? await import('./src/environments/environment').then(m => m.environment)
  : await import('./src/environments/environment.prod').then(m => m.environment);

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // MySQL Database connection (you'll need to install mysql2)
  // const mysql = require('mysql2/promise');
  // const dbPool = mysql.createPool(environment.database);

  // Example Express Rest API endpoints
  server.get('/api/health', (req, res) => {
    res.json({ 
      status: 'OK', 
      environment: environment.production ? 'production' : 'development',
      timestamp: new Date().toISOString()
    });
  });

  // Example database endpoint
  server.get('/api/test-db', async (req, res) => {
    try {
      // Uncomment when mysql2 is installed
      // const connection = await dbPool.getConnection();
      // const [rows] = await connection.execute('SELECT 1 as test');
      // connection.release();
      // res.json({ success: true, data: rows });
      
      res.json({ 
        message: 'Database configuration ready',
        config: {
          host: environment.database.host,
          port: environment.database.port,
          database: environment.database.database
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Database connection failed' });
    }
  });
  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
