const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Event = require('../../models/Event');


// @route   POST api/events
// @desc    Create event
// @access  Private

router.post('/', [
     auth,
    [
        check('timeOfEvent', 'time of the event is required').not().isEmpty(),
        check('dateOfEvent', 'date of the event is required').not().isEmpty(),
        check('title', 'title of the event is required').not().isEmpty(),
        check('location', 'Location of the event is required').not().isEmpty(),
        check('name', 'Name of Speaker is required').not().isEmpty(),
        check('bio', 'Bio of Speaker is required').not().isEmpty(),
        check('interests', 'Interests of Speaker is required').not().isEmpty()

        ]
    ],
 async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        timeOfEvent,
        dateOfEvent,
        title,
        location,
        name,
        bio,
        interests
    } = req.body;

    // Build Event object

    const eventFields = {};
    if(timeOfEvent) eventFields.timeOfEvent = timeOfEvent;
    if(dateOfEvent) eventFields.dateOfEvent = dateOfEvent;
    if(title) eventFields.title = title;
    if(location) eventFields.location = location;

    // Build Speaker object

    eventFields.speaker = {};
    if(name) eventFields.speaker.name = name;
    if(bio) eventFields.speaker.bio = bio;
    if(interests) eventFields.speaker.interests = interests;

    const event = new Event(eventFields);

    try {
        await event.save();
        res.status(201).send(event);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }

});


// @route   PUT api/events/:id
// @desc    Update event
// @access  Private

router.put('/:id', [
    auth,
   [
    check('timeOfEvent', 'time of the event is required').not().isEmpty(),
    check('dateOfEvent', 'date of the event is required').not().isEmpty(),
    check('title', 'title of the event is required').not().isEmpty(),
    check('location', 'Location of the event is required').not().isEmpty(),
    check('name', 'Name of Speaker is required').not().isEmpty(),
    check('bio', 'Bio of Speaker is required').not().isEmpty(),
    check('interests', 'Interests of Speaker is required').not().isEmpty()

       ]
   ],

    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const {
            timeOfEvent,
            dateOfEvent,
            title,
            location,
            name,
            bio,
            interests
        } = req.body;
    
        // Build Event object
    
        const eventFields = {};
        if(timeOfEvent) eventFields.timeOfEvent = timeOfEvent;
        if(dateOfEvent) eventFields.dateOfEvent = dateOfEvent;
        if(title) eventFields.title = title;
        if(location) eventFields.location = location;
    
        // Build Speaker object
    
        eventFields.speaker = {};
        if(name) eventFields.speaker.name = name;
        if(bio) eventFields.speaker.bio = bio;
        if(interests) eventFields.speaker.interests = interests;
    
        try {
            const event = await Event.findOneAndUpdate( req.params.id , { $set: eventFields}, { new: true } );
            if (!event){
                return res.status(404);
            }
            res.status(201).send(event);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

// @route   GET api/events
// @desc    GET all events
// @access  Public

router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(201).send(events)
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});

// @route   GET api/events/:id
// @desc    Show single event
// @access  Public

router.get('/:id', async (req, res) =>{
    try {

        const event = await Event.findById(req.params.id);
        if(!event) {
            return res.status(404).send();
        }
        res.status(200).send(event);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }

});

// @route   Delete api/events/:id
// @desc    Delete a single event
// @access  Public

router.delete('/:id', async (req, res) => {
    try {

        const event = await Event.findByIdAndDelete(req.params.id);
        if(!event){
            return res.status(404).send();
        }
        res.send(event);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }
});



module.exports = router;