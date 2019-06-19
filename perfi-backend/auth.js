const router = require('express').Router()
const {User} = require('./db')
module.exports = router

// route for user X
// home page request
router.get('/me', (req, res, next) => {
  res.json(req.user || {})
})

// Login page request to database
router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    if (user) {
      req.login(user, (err) => err ? next(err) : res.json(user))
    } else {
      const err = new Error('Incorrect email or password!')
      err.status = 401
      throw err
    }
  } catch (err) {
    next(err)
  }
});

// Logout, deletes session request X
router.delete('/logout', (req, res, next) => {
  res.json('logout')
  /*
  if (req.session) {
    // delete session object
    req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    else {
      return res.redirect('/')
    }
  });
  }
  */
});
