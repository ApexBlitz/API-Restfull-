const db = require('../models');

const Entity3Controller = {
  getAllEntity3: async (req, res) => {
    try {
      const entities = await db.Entity3.findAll();
      res.json(entities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getEntity3ById: async (req, res) => {
    try {
      const entityId = req.params.id;
      const entity = await db.Entity3.findByPk(entityId);

      if (!entity) {
        return res.status(404).json({ error: 'Entity3 not found' });
      }

      res.json(entity);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createEntity3: async (req, res) => {
    try {
      const { attribute1, attribute2 } = req.body;
      const newEntity3 = await db.Entity3.create({ attribute1, attribute2 });
      res.json(newEntity3);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateEntity3: async (req, res) => {
    try {
      const entityId = req.params.id;
      const { attribute1, attribute2 } = req.body;

      const entity3 = await db.Entity3.findByPk(entityId);

      if (!entity3) {
        return res.status(404).json({ error: 'Entity3 not found' });
      }

      await entity3.update({ attribute1, attribute2 });

      res.json(entity3);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteEntity3: async (req, res) => {
    try {
      const entityId = req.params.id;
      const entity3 = await db.Entity3.findByPk(entityId);

      if (!entity3) {
        return res.status(404).json({ error: 'Entity3 not found' });
      }

      await entity3.destroy();

      res.json({ message: 'Entity3 deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = Entity3Controller;
