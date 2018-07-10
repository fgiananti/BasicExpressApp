const express = require('express');
const app = express();
const indexRoutes = require('./routes/indexRoutes');

app.use('/', indexRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('connected')
})
