
const express = require('express');
const app = express();

app.use((req, res) => {
  console.log(`Path: ${req.path}`);
  console.log(`Method: ${req.method}`);
  console.log('Headers:');
  console.log(req.headers);

  res.status(200).json({
    path: req.path,
    method: req.method,
    headers: req.headers,
  });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = server;
