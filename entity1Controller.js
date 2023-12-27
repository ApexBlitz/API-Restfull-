const db = require('../models');

const Entity1Controller = {
  getAllEntity1: async (req, res) => {
    try {
      const entities = await db.Entity1.findAll();
      res.json(entities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getEntity1ById: async (req, res) => {
    try {
      const entityId = req.params.id;
      const entity = await db.Entity1.findByPk(entityId);

      if (!entity) {
        return res.status(404).json({ error: 'Entity1 not found' });
      }

      res.json(entity);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createEntity1: async (req, res) => {
    try {
      const { attribute1, attribute2 } = req.body;
      const newEntity1 = await db.Entity1.create({ attribute1, attribute2 });
      res.json(newEntity1);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateEntity1: async (req, res) => {
    try {
      const entityId = req.params.id;
      const { attribute1, attribute2 } = req.body;

      const entity1 = await db.Entity1.findByPk(entityId);

      if (!entity1) {
        return res.status(404).json({ error: 'Entity1 not found' });
      }

      await entity1.update({ attribute1, attribute2 });

      res.json(entity1);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteEntity1: async (req, res) => {
    try {
      const entityId = req.params.id;
      const entity1 = await db.Entity1.findByPk(entityId);

      if (!entity1) {
        return res.status(404).json({ error: 'Entity1 not found' });
      }

      await entity1.destroy();

      res.json({ message: 'Entity1 deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = Entity1Controller;
