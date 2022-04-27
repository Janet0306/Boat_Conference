const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    timeOfEvent: {
        type: String,
        required: true,
    },
    dateOfEvent: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    speaker: {
        name: {
            type: String,
            required: true
            },
        bio: {
            type: String,
            required: true
            },
        interests: {
            type: String,
            required: true
            }
        },
    
    video: [
        {
            uploadDate: {
                type: Date,
                default: Date.now
            },
            originalName: {
                type: String,
            },
            name: {
                type: String,
            },
            path: {
                type: String,
            },
            mineType: {
                type: String
            },
            size: {
                type: Number
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Event = mongoose.model('event', EventSchema);