const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/polls', require('./routes/pollRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}).catch(err => console.log('Error while syncing database:', err));
