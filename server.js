const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const rootDir = __dirname;
const dataPath = path.join(rootDir, 'data');
const productsPath = path.join(dataPath, 'products.json');
const ordersPath = path.join(dataPath, 'orders.json');

if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath, { recursive: true });
if (!fs.existsSync(productsPath)) fs.writeFileSync(productsPath, JSON.stringify([]));
if (!fs.existsSync(ordersPath)) fs.writeFileSync(ordersPath, JSON.stringify([]));

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return [];
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

function serveStatic(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.gif': 'image/gif',
    '.webp': 'image/webp'
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';
  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || '127.0.0.1'}`);
  const pathname = decodeURIComponent(reqUrl.pathname);

  if (pathname.startsWith('/api/products')) {
    const products = readJson(productsPath);

    if (req.method === 'GET') {
      sendJson(res, 200, products);
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        const payload = JSON.parse(body || '{}');
        const newProduct = {
          id: Date.now(),
          ...payload,
          image: payload.image || 'images/placeholder-product.png'
        };
        const updatedProducts = [newProduct, ...products];
        writeJson(productsPath, updatedProducts);
        sendJson(res, 201, newProduct);
      });
      return;
    }

    if (req.method === 'PATCH') {
      const id = pathname.split('/').filter(Boolean).pop();
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        const updates = JSON.parse(body || '{}');
        const updatedProducts = products.map(product => {
          if (String(product.id) === String(id)) {
            return { ...product, ...updates };
          }
          return product;
        });
        writeJson(productsPath, updatedProducts);
        sendJson(res, 200, updatedProducts.find(product => String(product.id) === String(id)) || {});
      });
      return;
    }

    if (req.method === 'DELETE') {
      const id = pathname.split('/').filter(Boolean).pop();
      const updatedProducts = products.filter(product => String(product.id) !== String(id));
      writeJson(productsPath, updatedProducts);
      sendJson(res, 200, { success: true });
      return;
    }
  }

  if (pathname.startsWith('/api/orders')) {
    const orders = readJson(ordersPath);

    if (req.method === 'GET') {
      sendJson(res, 200, orders);
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        const payload = JSON.parse(body || '{}');
        const order = payload.order || payload;
        const savedOrder = {
          ...order,
          id: order.id || Date.now(),
          timestamp: order.timestamp || new Date().toISOString()
        };
        const updatedOrders = [savedOrder, ...orders];
        writeJson(ordersPath, updatedOrders);
        sendJson(res, 201, savedOrder);
      });
      return;
    }
  }

  const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  const filePath = path.join(rootDir, requested);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    serveStatic(res, filePath);
    return;
  }

  if (requested === 'index.html' || requested === '') {
    serveStatic(res, path.join(rootDir, 'index.html'));
    return;
  }

  const fallback = path.join(rootDir, 'index.html');
  serveStatic(res, fallback);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
