const Thought = require('../models/Thought');

exports.createThought = async (req, res) => {
  try {
    const { text } = req.body;
    const thought = await Thought.create({ user: req.user.id, text });
    res.status(201).json(thought);
  } catch (err) {
    res.status(500).json({ message: 'Could not save thought', error: err.message });
  }
};