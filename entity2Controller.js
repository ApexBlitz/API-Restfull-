const db = require('../models');

const Entity2Controller = {
  getAllEntity2: async (req, res) => {
    try {
      const entities = await db.Entity2.findAll();
      res.json(entities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getEntity2ById: async (req, res) => {
    try {
      const entityId = req.params.id;
      const entity = await db.Entity2.findByPk(entityId);

      if (!entity) {
        return res.status(404).json({ error: 'Entity2 not found' });
      }

      res.json(entity);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createEntity2: async (req, res) => {
    try {
      const { attribute1, attribute2 } = req.body;
      const newEntity2 = await db.Entity2.create({ attribute1, attribute2 });
      res.json(newEntity2);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateEntity2: async (req, res) => {
    try {
      const entityId = req.params.id;
      const { attribute1, attribute2 } = req.body;

      const entity2 = await db.Entity2.findByPk(entityId);

      if (!entity2) {
        return res.status(404).json({ error: 'Entity2 not found' });
      }

      await entity2.update({ attribute1, attribute2 });

      res.json(entity2);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteEntity2: async (req, res) => {
    try {
      const entityId = req.params.id;
      const entity2 = await db.Entity2.findByPk(entityId);

      if (!entity2) {
        return res.status(404).json({ error: 'Entity2 not found' });
      }

      await entity2.destroy();

      res.json({ message: 'Entity2 deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = Entity2Controller;
