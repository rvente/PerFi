const router = require('express').Router()
const {User} = require('./db')
module.exports = router

router.use('/google', require('./oauth'))

// home page request
router.get('/home', (req, res, next) => {
  res.json(req.user || {})
})

// creates new user in database
// post new user from /newuser
router.post('/newaccount', async (req, res, next) => {
  // check fields if complete
  if(req.body.username &&
    req.body.email &&
    req.body.firstName &&
    req.body.lastName &&
    req.body.password) {

      var userData = {
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        password: req.body.password
      }
  // insert new user into db
    User.create(userData, function(err,user){
      if(err) {
        return next(err)
      }
      else {
        return res.redirect('/');
      }
    });
  }
}

// creates new user in database
// post new user from /newuser
router.post('/newtransaction', async (req, res, next) => {
  // check if fields complete
  if(req.body.date &&
    req.body.cost &&
    req.body.title &&
    req.body.category &&
    req.body.userid) {

      var transactionData = {
        date: req.body.date,
        cost: req.body.cost,
        title: req.body.title,
        category: req.body.category,
        userid: req.body.userid
      }
  // insert new user into db
    User.create(userData, function(err,user){
      if(err) {
        return next(err)
      }
      else {
        return res.redirect('/');
      }
    });
  }
}

// Login request
router.put('/account', async (req, res, next) => {
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
})

// Logout, deletes session request
router.delete('/logout', (req, res, next) => {
  req.logout()
  req.session.destroy((err) => {
    if (err) return next(err)
    res.status(204).end()
  })
})

