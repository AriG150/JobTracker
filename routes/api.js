const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Applications = require('../models/application');
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

// GET /api/userapp - Show all applications for a user 
router.get('/userapp', (req, res) => {
  User.findById(req.user._id).populate('applications').exec((err, user) => {
    res.json(user.applications)
  })
})

// GET /api/app/:id - Show details of one application 
router.get('/app/:id', (req, res) => {
  User.findById(req.user._id).populate('applications').exec((err, user) => {
    Applications.findById(req.params.id, (err, application) => {
      res.json(application)
    })
  })
})


// POST /api/add - Create a new application for a user 
router.post('/add', (req, res) => {
  User.findById(req.user._id, (err, user) => {
    // Create an application
    Applications.create({
      name: req.body.name,
      company: req.body.company,
      resume: false,
      coverLetter: false,
      recruiter: false,
      informational: false,
    }, (err, application) => {
      // Save the application so that it gets an ID
      application.save((err, newApplication) => {
        // Push that application into the User.applications array
        user.applications.push(newApplication)
        // console.log(`🐙`,user)
        user.save((err, updatedUser) => {
          res.json(updatedUser)
          console.log(`🐸`, updatedUser)
        });
      });
    });
    }).catch(err => console.log(`🚨`, err))
  })

// router.post('/add', (req, res) => {
//   User.findById(req.user._id, (err, user) => {
//     // Create an application
//     Applications.create({
//       name: req.body.name,
//       company: req.body.company,
//       resume: false,
//       coverLetter: false,
//       recruiter: false,
//       informational: false,
//     }, (err, application) => {
//       application.save((err, newApplication) => {
//         Applications.offer.create({
//           contacted: false,
//           rejected: false,
//           offer: false,
//           counter: false,
//           reject: false
//         }, (err, newOffer) => {
//           console.log(`🐋`, newOffer)
//           // Push that application into the User.applications array
//           user.applications.push(newApplication, newOffer)
//           // console.log(`🐙`,user)
//           // user.save((err, updatedUser) => {
//           //   res.json(updatedUser)
//           //   console.log(`🐸`, updatedUser)
//           // });
//         })
//       });
//     });
//     })
//   })

// //Create a offer for an application
// router.post('/offer', (req, res) => {
//   User.findById(req.user._id, (err, user) => {
//     user.applications.id.Offer.create({
//       contacted: false,
//       rejected: false,
//       offer: false,
//       counter: false,
//       reject: false
//     }, (err, newOffer) => {
//       console.log(`🦖`, newOffer)
//     })
//   })
// });

module.exports = router;