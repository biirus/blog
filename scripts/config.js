const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(`.env.${process.env.NODE_ENV || 'development'}`),
});
