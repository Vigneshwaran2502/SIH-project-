const Monastery = require('../models/Monastery');

exports.getAllMonasteries = async (req, res) => {
  try {
    const monasteries = await Monastery.find();
    res.json(monasteries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMonasteryById = async (req, res) => {
  try {
    const monastery = await Monastery.findById(req.params.id);
    if (!monastery) return res.status(404).json({ message: 'Monastery not found' });
    res.json(monastery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMonastery = async (req, res) => {
  const monastery = new Monastery(req.body);
  try {
    const newMonastery = await monastery.save();
    res.status(201).json(newMonastery);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};