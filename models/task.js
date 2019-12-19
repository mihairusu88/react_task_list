const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    assignedUsersId: {
        type: Array,
        required: true,
        default: []
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Tasks', taskSchema);