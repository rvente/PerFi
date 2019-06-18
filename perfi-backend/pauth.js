const router = require('express').Router()
const {User} = require('./db')
const passport = require('passport')
module.exports = router


// verifies if user check-in is valid
const verificationCallback = async (token, refreshToken, profile, done) => {
  const info = {
    // name: profile.displayName,
    email: profile.emails[0].value,
  }

  try {
    const [user] = await User.findOrCreate({
      where: {googleId: profile.id},
      defaults: info
    })
    done(null, user) // the user we pass to done here is piped through passport.serializeUser
  } catch (err) {
    done(err)
  }
}


