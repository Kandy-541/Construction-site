const assert = require('assert');

async function main() {
  const response = await fetch('http://127.0.0.1:3000/api/products');
  assert.strictEqual(response.status, 200, 'Expected /api/products to be available');
  const payload = await response.json();
  assert.ok(Array.isArray(payload), 'Expected products endpoint to return an array');
  console.log('API check passed with', payload.length, 'products');
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
