const GAS_URL = "https://script.google.com/macros/s/AKfycbxUXaIbbg0pz55Bck7QqCqRJzCYh9zIoyGwiVyJ54aqxOmuc5tFGfR919DLg3CVrloa/exec";

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="refresh" content="0; url=${GAS_URL}">
        <title>Redirecting...</title>
      </head>
      <body>
        <p>Jika anda tidak redirect automatik, klik <a href="${GAS_URL}">sini</a>.</p>
      </body>
    </html>
  `);
}
