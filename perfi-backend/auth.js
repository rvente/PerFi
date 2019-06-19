const router = require('express').Router()
const {User,Transaction} = require('./db')
module.exports = router

// dummy data
let accountArray=[
    {
      username:"John",
      email: "john@john.com",
      firstname: "John",
      lastname: "Nohj",
    }
]

let transactionArray=[
    {
      date: "05092019",
      cost: 10.00,
      title: "matcha",
      category: "food",
      subscription: 0
    },
    {
      date: "05092019",
      cost: 5.00,
      title: "coffee",
      category: "food",
      subscription: 0
    },
        {
      date: "05092019",
      cost: 17.00,
      title: "apples",
      category: "food",
      subscription: 0
    }
  ]
  let budgetArray=[
    {
      amount: 1000
    }
  ]

// route for home page X
router.get('/home', (req,res,next) => {
  res.json("home")
})

// route to request user information for account page X
// send back 
router.get('/account', (req, res, next) => {
   // res.json('account');
    res.json(accountArray);

 /* const account = account.filter(q => (q.id === parseInt(req.params.id)));
  res.send(account);
  */
})

// route for user X
// home page request
router.get('/me', (req, res, next) => {
  res.json(req.user || {})
})

// creates new user in database X
// post new user from /newuser
router.post('/newaccount', (req, res, next) => {
    res.json('newaccount')

  // check fields if complete



/*
// create new user
const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

// update user info
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}



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
    })
  }*/
})

// creates new transaction in database X
// post new transaction from /newuser
router.post('/newtransaction', (req, res, next) => {
  res.json('newtransaction')
  /*
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
    })
  }*/
})


router.post('/deletetransaction', (req, res, next) => {
  res.json('deletetransaction')

  /*const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
*/
})
// route for transaction history X
router.get('/transaction', (req, res, next) => {
  //res.json('transaction')
  res.json(transactionArray, budgetArray)

/*  try {
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
  */
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


