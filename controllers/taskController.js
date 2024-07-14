// const Task = require('../models/Task');

// exports.createTask = async (req, res) => {
//   const { project, name, description, status, tags, dueDate, assignedUser } = req.body;
//   try {
//     const newTask = new Task({ project, name, description, status, tags, dueDate, assignedUser });
//     const task = await newTask.save();
//     res.json(task);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// exports.getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({}).populate('project').populate('assignedUser');
//     res.json(tasks);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };
const mongoose = require('mongoose');
const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createTask = async (req, res) => {
  const { project, name, description, status, tags, dueDate, assignedUser } = req.body;

  // Validate ObjectIds
  console.log(project);
  console.log(name);

  if (!mongoose.Types.ObjectId.isValid(project)) {
    return res.status(400).json({ msg: 'Invalid project ID' });
  }

  if (assignedUser && !mongoose.Types.ObjectId.isValid(assignedUser)) {
    return res.status(400).json({ msg: 'Invalid assigned user ID' });
  }

  try {
    const newTask = new Task({ project, name, description, status, tags, dueDate, assignedUser });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
