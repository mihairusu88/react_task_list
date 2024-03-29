const express = require('express');
const router = express.Router();
const Task = require('../models/task');

/**
 * Get all tasks
 * 
 * route /api/tasks
 * method GET
 */
router.get('/', async (req, res) => {
    try {
        const tasksResult = await Task.find({}).sort({ createdDate: -1, });
        return res.status(200).json({
            tasks: tasksResult
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

/**
 * Get a single task
 * 
 * @route /api/tasks/{id}
 * @method GET
 */
router.get('/:id', getTaskMiddleware, (req, res) => {
    return res.status(200).json(res.task);
});

/**
 * Get user tasks
 * 
 * route /api/tasks/{user_id}
 * method GET
 */
router.get('/user/:user_id', async (req, res) => {
    const userId = parseInt(req.params.user_id);
    try {
        const userTasks = await Task.find({ assignedUsersId: userId }).sort({ createdDate: -1, });
        return res.status(200).json({
            tasks: userTasks
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

/**
 * Create a task
 * 
 * route /api/tasks
 * method POST
 */
router.post('/', async (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        assignedUsersId: req.body.assignedUsersId
    });

    try {
        const newTaskResult = await newTask.save();
        return res.status(200).json(newTaskResult);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

/**
 * Update a task
 * 
 * route /api/tasks/{id}
 * method PUT
 */
router.put('/:id', getTaskMiddleware, async (req, res) => {
    if (req.body.title !== null) {
        res.task.title = req.body.title;
    }
    if (req.body.description !== null) {
        res.task.description = req.body.description;
    }
    if (req.body.priority !== null) {
        res.task.priority = req.body.priority;
    }
    if (req.body.status !== null) {
        res.task.status = req.body.status;
    }
    if (req.body.assignedUsersId !== null) {
        res.task.assignedUsersId = req.body.assignedUsersId;
    }

    try {
        const isSavedTask = await res.task.save()
        return res.status(200).json(isSavedTask);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

/**
 * Delete a task
 * 
 * route /api/tasks/{id}
 * method DELETE
 */
router.delete('/:id', getTaskMiddleware, async (req, res) => {
    try {
        const isDeletedTask = await res.task.delete();
        return res.status(200).json(isDeletedTask);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

/**
 * Get task middleware
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getTaskMiddleware(req, res, next) {
    let taskExist = null;

    try {
        taskExist = await Task.findById(req.params.id);
        if (taskExist == null) {
            return res.status(404).json({
                message: 'Task does not exist'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }

    res.task = taskExist;
    next();
}

module.exports = router;
