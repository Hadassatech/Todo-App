const express = require('express');
const fs = require('fs').promises; 
const router = express.Router();

const filePath = './data/tasks.json';

// Load tasks
const loadTasks = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];  
  }
};

// Save tasks
const saveTasks = async (tasks) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await loadTasks();
  res.json(tasks);
});

// Add a new task
router.post('/', async (req, res) => {
  const tasks = await loadTasks();
  const newTask = {
    task_id: tasks.length ? tasks[tasks.length - 1].task_id + 1 : 1,
    title: req.body.title,
    description: req.body.description || '',
    create_date: new Date().toISOString(),
    update_date: new Date().toISOString(),
    due_date: req.body.due_date || null,
    assigned_user_id: req.body.assigned_user_id || null,
    priority_id: req.body.priority_id || 1,
    status_id: req.body.status_id || 1,
  };
  tasks.push(newTask);
  await saveTasks(tasks);
  res.status(201).json(newTask);
});

// Delete a task
router.delete('/:id', async (req, res) => {
  let tasks = await loadTasks();
  const taskId = parseInt(req.params.id, 10);
  tasks = tasks.filter((task) => task.task_id !== taskId);
  await saveTasks(tasks);
  res.status(204).send();
});

// Update a task
router.put('/:id', async (req, res) => {
  let tasks = await loadTasks();
  const taskId = parseInt(req.params.id, 10);
  const taskIndex = tasks.findIndex((task) => task.task_id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const updatedTask = {
    ...tasks[taskIndex],
    ...req.body,
    update_date: new Date().toISOString(),
  };

  tasks[taskIndex] = updatedTask;
  await saveTasks(tasks);
  res.json(updatedTask);
});

module.exports = router;
