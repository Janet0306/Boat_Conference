const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    event: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'event'
        }
    ],
    location: {
        type: String,
        required: true,
    },
    company: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
