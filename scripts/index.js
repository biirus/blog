require('./config');
const express = require('express');
const cors = require('cors');
const pages = require('./api/pages');
const page = require('./api/page');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.get('/api/pages/:lang?', pages);
app.get('/api/page', page);

app.listen(process.env.PORT, () => {
  console.log(`🚀 API server is running on port ${process.env.PORT}`);
});
