// require('dotenv').config();
// const mongoose = require('mongoose');
// const Application = require('./models/application');
// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.once('open', () => console.log(`Connected to MongoDB on ${db.host} at ${db.port}`));
// db.on('error', (err) => console.log(`Database error: ${err}`));

// // User Id:
// // 5de985292b232e44ea50f40d
// // 5de98b831c62d445fffddeaa

// let app = [{
//   name: "Front End Developer",
//   company: "Banana Company",
//   resume: false,
//   coverletter: false,
//   recruiter: false,
//   inforamtional: false,
//   userId: "5de985292b232e44ea50f40d"},
//   {
//     name: "JR Front End Developer",
//     company: "BlackInc Inc.",
//     resume: false,
//     coverletter: false,
//     recruiter: false,
//     inforamtional: false,
//     userId: "5de985292b232e44ea50f40d"
//   },
// {
//   name: "Full Stack Engineer",
//   company: "Flotsem and Jetsom",
//   resume: false,
//   coverletter: false,
//   recruiter: false,
//   inforamtional: false,
//   userId: "5de991ffec1ad94827601125"
// }
// ]

//   Application.collection.insert(app, function(err, docs) {
//     if (err) return console.log(`🚨`, err);
//     console.log(app, `New Applications for ${app.userId}`)
//   })


// // categories.forEach(cat => {
// //   Category.create({name: cat}, (err, category) => {
// //   });
// // });
 