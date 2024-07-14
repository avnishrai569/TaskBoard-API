// const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({
//   project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   status: { type: String, required: true, enum: ['Backlog', 'In Discussion', 'In Progress', 'Done'] },
//   tags: { type: [String] },
//   dueDate: { type: Date },
//   assignedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// });

// module.exports = mongoose.model('Task', TaskSchema);

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true, enum: ['Backlog', 'In Discussion', 'In Progress', 'Done'] },
  tags: { type: [String] },
  dueDate: { type: Date },
  assignedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Task', TaskSchema);
