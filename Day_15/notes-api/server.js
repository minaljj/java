
const express = require('express');
const app = express();
const notesRoutes = require('./routes/notesRoutes');

app.use(express.json());
app.use('/notes', notesRoutes);

app.listen(3001, () => {
  console.log('server started on port 3001');
});
module.exports = app;