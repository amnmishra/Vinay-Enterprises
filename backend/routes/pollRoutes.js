const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const pollController = require('../controllers/pollController');

// @route   POST /api/polls
// @desc    Create a poll
// @access  Private (only Institute can create)
router.post('/', pollController.createPoll);

// @route   GET /api/polls
// @desc    Get all polls
// @access  Private
router.get('/', pollController.getPolls);

module.exports = router;
