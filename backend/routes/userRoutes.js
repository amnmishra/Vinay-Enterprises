const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// @route   GET /api/users
// @desc    Get all users
// @access  Private
router.get('/', userController.getUsers);

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Private
router.get('/:id', userController.getUserById);

// @route   POST /api/users
// @desc    Create a user
// @access  Private
router.post('/', authMiddleware, userController.createUser);

// @route   PUT /api/users/:id
// @desc    Update a user
// @access  Private
router.put('/:id', authMiddleware, userController.updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete a user
// @access  Private
router.delete('/:id', authMiddleware, userController.deleteUser);

module.exports = router;
