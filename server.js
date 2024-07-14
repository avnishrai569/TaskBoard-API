// const express = require('express');
// const connectDB = require('./config/db');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/authRoutes');
// const projectRoutes = require('./routes/projectRoutes');
// const taskRoutes = require('./routes/taskRoutes');

// dotenv.config();

// const app = express();
// connectDB();

// app.use(express.json({ extended: false }));

// app.use('/api/auth', authRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/tasks', taskRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
