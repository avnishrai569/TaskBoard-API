// const express = require('express');
// const router = express.Router();
// const taskController = require('../controllers/taskController');
// const auth = require('../middleware/authMiddleware');

// router.post('/', auth, taskController.createTask);
// router.get('/', auth, taskController.getAllTasks);

// module.exports = router;
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');

// Make sure to properly define routes with corresponding controller methods
router.post('/', auth, taskController.createTask);
router.get('/', auth, taskController.getAllTasks);

module.exports = router;
