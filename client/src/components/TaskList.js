import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import axios from 'axios';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  // load tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_URL}/tasks`);
        setTasks(response.data);
      } catch (error) {
        setError('Error fetching tasks');
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // add a new task
  const handleAddTask = async (newTask) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      setError('Error adding task');
    }
  };

  // update task
  const handleEditTask = async (updatedTask) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${updatedTask.task_id}`, updatedTask);
      const updatedTasks = tasks.map(task =>
        task.task_id === updatedTask.task_id ? response.data : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      setError('Error updating task');
    }
  };

  // delete task
  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`);
      const updatedTasks = tasks.filter(task => task.task_id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      setError('Error deleting task');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="task-list-container">
      <div className="add-task-container">
        <AddTask onAddTask={handleAddTask} />
      </div>
      <div className="task-list-display">
        {tasks.map(task => (
          <TaskItem
            key={task.task_id}
            task={task}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
