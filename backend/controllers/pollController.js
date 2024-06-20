const Poll = require('../models/Poll');

exports.createPoll = async (req, res) => {
  const { question, createdBy, targetRoles } = req.body;

  try {
    const poll = await Poll.create({
      question,
      createdBy,
      targetRoles
    });

    res.json(poll);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getPolls = async (req, res) => {
  try {
    const polls = await Poll.findAll();
    res.json(polls);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
