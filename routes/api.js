const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Application = require('../models/application');
const Note = require('../models/note')
const Offer = require('../models/offer')

// Router is mounted at /api

// TEST ROUTE GET /api/ - Get all users 
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        //all users
        res.json(users);
        console.log(`Found ALL users!1!`);
    });
});

// TEST ROUTE GET /api/apps - Get all applications. 
router.get('/apps', (req, res) => {
    Application.find({}, (err, application) => {
        res.json(applications);
        console.log(`found ALL applications`);
    });
});

// GET /api/userapp - Show all applications for a user 
router.get('/userapp', (req, res) => {
  User.findById(req.user._id).populate('applications').exec((err, user) => {
    console.log(`🥳`,req.user._id)
    if (err) return console.log(`🚨`,err);
    console.log(`🔥`, user.application[0])
    let arr = [];
    for(let i = 0; i < user.application.length; i++){
        console.log(`🥺`, user.application)
        if (user.application.length > 0){
            arr.push(user.application[i])
        }
    }
    res.json(arr);
  })
})

// POST /api/add - Create a new application for a user 
router.post('/add', (req, res) => {
  User.findById(req.user._id, (err, user) => {
    // Create an application
    Application.create({
      name: req.body.name,
      company: req.body.company,
      resume: false,
      coverLetter: false,
      recruiter: false,
      informational: false,
    })
    // Save the application so that it gets an ID
    // Push that application into the User.applications array
    // Save the user
    user.applications.push({
      name: req.body.name,
      company: req.body.company,
      resume: false,
      coverLetter: false,
      recruiter: false,
      informational: false,
      // TODO: need reference to Offer and Note?
    });
    user.save( (err, newApp) => {
      res.json(newApp);
    });
  }).catch(err => console.log(`🚨`, err))
})

module.exports = router;