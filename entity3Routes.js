const express = require('express');
const router = express.Router();
const entity3Controller = require('../controllers/entity3Controller');

router.get('/', entity3Controller.getAllEntity3);
router.get('/:id', entity3Controller.getEntity3ById);
router.post('/', entity3Controller.createEntity3);
router.put('/:id', entity3Controller.updateEntity3);
router.delete('/:id', entity3Controller.deleteEntity3);

module.exports = router;
