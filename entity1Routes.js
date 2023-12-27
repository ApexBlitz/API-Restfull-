const express = require('express');
const router = express.Router();
const entity1Controller = require('../controllers/entity1Controller');

router.get('/', entity1Controller.getAllEntity1);
router.get('/:id', entity1Controller.getEntity1ById);
router.post('/', entity1Controller.createEntity1);
router.put('/:id', entity1Controller.updateEntity1);
router.delete('/:id', entity1Controller.deleteEntity1);

module.exports = router;
