// const admin = require('./config/firebase-config');

// async function decodeToken(req, res, next) {
//   // const token = req.headers.authorization
//   //   ? req.headers.authorization.split(' ')[1]
//   //   : '';
//   // try {
//   //   const decodeValue = await admin.auth().verifyIdToken(token);
//   //   if (decodeValue) {
//   //     req.user = decodeValue.user_id;
//   //     return next();
//   //   }
//   //   return res.json({ message: 'Unauthorize Request' });
//   // } catch (e) {
//   //   return res.json({ message: 'Internal Error' });
//   // }
// }

const router = require("express").Router()
// const User = require('../db');
const User = require("../db/models/User")
// const Profile = require("../db/models/Profile");


// IP FOR MY PC 192.168.1.7

// login -> checks to see if user is valid
router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) })
  } catch (err) {
    next(err)
  }
})

// signup -> creates user and generates a token, prob so they stay logged in
router.post("/signup", async (req, res, next) => {
  try {
    const { username, password, email } = req.body
    const user = await User.create({ username, password, email })
    res.send({ token: await user.generateToken() })
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists")
    } else {
      next(err)
    }
  }
})

// me -> sends back user
router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})

module.exports = router

// module.exports = decodeToken;
