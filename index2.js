const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const entity1Routes = require('./entity1Routes');
const entity2Routes = require('./entity2Routes');
const entity3Routes = require('./entity3Routes');

router.use('/users', userRoutes);
router.use('/entity1', entity1Routes);
router.use('/entity2', entity2Routes);
router.use('/entity3', entity3Routes);

module.exports = router;
