const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Event = require('../../models/Event');
const mongoose = require('mongoose');


// @route   GET api/profile/me
// @desc    GET current users profile
// @access  Private


router.get('/me', auth, async (req, res) => {
    try {

        const profile = await Profile.findOne({ user: req.user.id }).populate('user' ['name']);

        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.status(201).send(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');  
    }
});

// @route   POST api/profile/me/addEvent
// @desc    POST selected event to users profile
// @access  Private

router.post('/me/addEvent', auth, async (req, res) => {

    const event = req.body;
    
    const profileFields = {};
    if(event) profileFields.event = event;

    try {

        let profile = await Profile.findOne({ user: req.user.id });

        if(profile) {
            let {event} = req.body;
            profile = await Profile.findOneAndUpdate( { user: req.user.id }, { $push: {"event": event}}, { new: true });
            await profile.save()
            
            res.status(201).send(profile);
        }
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }

});

// @route   POST api/profile
// @desc    Create and update user profile
// @access  Private


router.post('/', [ auth ], 
        [
            check('location', 'Your location is required').not().isEmpty(),
        ],

async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        location,
        company,
    } = req.body

    // Build profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if(location) profileFields.location = location;
    if(company) profileFields.company = company;

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if(profile) {
            //update
            profile = await Profile.findOneAndUpdate( { user: req.user.id }, { $set: profileFields}, { new: true });
            res.status(201).send(profile);
        }

        // Create

        profile = new Profile(profileFields);
        await profile.save();
        res.status(201).send(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');  
    }
});


// @route   GET api/profile
// @desc    Get all profiles
// @access  Public

router.get('/', async (req, res) => {
    try {

        const profiles = await Profile.find().populate('user' ['name']);
        res.status(201).send(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');  
        
    }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', async (req, res) => {
    try {

        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user' ['name']);

        if(!profile) {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(201).send(profiles);
    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server Error');  
    }
});

// @route   DELETE api/profile
// @desc    Delete profile and user
// @access  Private

router.delete('/', auth, async (req, res) => {
    try {
        await Profile.findOneAndRemove({ user: req.user.id });
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'User deleted' });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');  
    }
});




module.exports = router;


