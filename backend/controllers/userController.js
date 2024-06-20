const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createUser = async (req, res) => {
  const { name, email, phone, role } = req.body;

  try {
    let user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = await User.create({
      name,
      email,
      phone,
      role
    });

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, role } = req.body;

  try {
    let user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.role = role;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    let user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    await user.destroy();

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
