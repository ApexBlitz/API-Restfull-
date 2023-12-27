const express = require('express');
const router = express.Router();
const entity2Controller = require('../controllers/entity2Controller');

router.get('/', entity2Controller.getAllEntity2);
router.get('/:id', entity2Controller.getEntity2ById);
router.post('/', entity2Controller.createEntity2);
router.put('/:id', entity2Controller.updateEntity2);
router.delete('/:id', entity2Controller.deleteEntity2);

module.exports = router;
