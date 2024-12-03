const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});