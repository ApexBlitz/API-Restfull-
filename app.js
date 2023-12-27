// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Appliquer les routes
app.use('/users', routes.userRoutes);
app.use('/entity1', routes.entity1Routes);
app.use('/entity2', routes.entity2Routes);
app.use('/entity3', routes.entity3Routes);

// Synchroniser la base de données et démarrer le serveur
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
