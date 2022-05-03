const router = require('express').Router();
// const decodeToken = require('../auth');
const {
  models: { User },
} = require('../db/');

module.exports = router;

router.get('/', async (req, res, next) => {
  // try {
  //   const [user, hasCreatedUser] = await User.findOrCreate({
  //     where: { user_id: req.user },
  //     attributes: { exclude: ['user_id'] },
  //   });
  //   res.json(user);
  // } catch (err) {
  //   res.next(err);
  // }
});
