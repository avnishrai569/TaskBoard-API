const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, projectController.createProject);
router.get('/', auth, projectController.getProjects);
router.get('/:projectId/tasks', auth, projectController.getProjectTasks);

module.exports = router;
