const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Applications = require('../models/application');
const Note = require('../models/application')
const Offer = require('../models/application')

// Router is mounted at /api

// TEST ROUTE GET /api/ - Get all users 
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        //all users
        res.json(users);
        console.log(`Found ALL users!1!`);
    });
});

// GET /api/use - Show all applications for a user 
router.get('/app', (req, res) => {
  User.findById(req.user._id).populate('applications').exec((err, user) => {
    res.json(user.applications)
  })
})

// GET /api/apps/:id - Show details of one application 
router.get('/apps/:id', (req, res) => {
  User.findById(req.user._id).populate('applications').exec((err, user) => {
    Applications.findById(req.params.id, (err, application) => {
      res.json(application)
    })
  })
})


// POST /api/apps - Create a new application for a user 
router.post('/apps', (req, res) => {
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

// POST /api/app/:id/note - Create a note for one application 
router.post('/app/:id/note', (req, res) => {
  User.findById(req.user._id, (err, user) => {
    Applications.findById(req.params.id, (err, application) => {
      console.log(application)
      //Create note
      note = {
        rec_convo: req.body.rec_convo,
        info_convo: req.body.info_convo,
        comments: req.body.comments,
      }
      //push note into app
      application.notes.push(note);
      //Save app
      application.save((err, newApplication) => {
        res.json(newApplication)
      })
    })
  })
})

//TODO: This route also edit offer checkboxes? Need another route?
// PUT /api/apps/:id - Edit unchecked/checked boxes for one app, also edit offer
// router.put('/app/:aId', (req, res) => {
//   User.findById(req.user._id).populate('applications').exec((err, user) => {
//     res.json(user.applications)
//   })
// })

// router.put('/app/:aId', (req, res) => {
//   Applications.findById(req.params.aId, (err, application) => {
//     console.log(`🐡`,application)
//     let copy = {...application}
//     application.remove();
//     application.set({
//       _id: copy._id,
//       name: copy.name,
//       company: copy.company,
//       resume: !copy.resume,
//       coverLetter: !copy.coverLetter,
//       recruiter: !copy.recruiter,
//       informational: !copy.informational,
//       notes: copy.notes,
//       offer: copy.offer
//     });
//     application.save((err, newApp) => {
//       res.json(application)
//     })
//   })
// })


// PUT /api/app/:appId/note/:nId - Edit note for one app 
router.put('/app/:appId/note/:nId', (req, res) =>{
  Applications.findById(req.params.appId, (err, application) => {
    let note = application.notes.id(req.params.nId)
    console.log(note)
    note.set({
      rec_convo: req.body.rec_convo,
      info_convo: req.body.info_convo,
      comments: req.body.comments
    })
    application.save()
    res.send(application)
  })
})

// DELETE / api/app/:appId/note/:nId


module.exports = router;