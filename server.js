import {handler} from './build/handler.js';
import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const privateKey = fs.readFileSync("./file.key");
const certificate = fs.readFileSync("./file.cert");
const caBundle = fs.readFileSync("./file.ca-bundle");
const credentials = { key: privateKey, cert: certificate, ca: caBundle };

const app = express();

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

const PORT = 80;
const SSLPORT = 443;

httpServer.listen(PORT, function () {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});

httpsServer.listen(SSLPORT, function () {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

// Serve static files from the /docs path
app.use('/docs', express.static('public/docs'));

// Serve the sitemap.xml file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get('/sitemap.xml', (req, res) => {
    res.sendFile('/public/sitemap.xml', { root: __dirname });
});
app.get('/robots.txt', (req, res) => {
    res.sendFile('/public/robots.txt', { root: __dirname });
});

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
    res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);
