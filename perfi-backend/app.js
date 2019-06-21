const express = require("express");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const { db, User, Transaction } = require("./db");
//const queries = require('./queries')
const app = express();
const PORT = 3000;
var cors = require("cors");

// middleware that should allow open access for requests to routes
app.use(cors());

//This tells express to log via morgan
//and morgan to log in the "combined" pre-defined format

// Logging middleware
app.use(morgan("dev"));

// Session middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: "hidden",
    resave: false,
    saveUninitialized: false
  })
);

// consumes 'req.session' so that passport can know what on the Session
app.use(passport.initialize());

// this will invoke our registered 'deserializedUser' method
// and attempt to put our user on 'req.user'
app.use(passport.session());

// creates cookie
// after finding or creating user, it is serialized on session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// after serializing a user, serialize user on session
// reads cookie
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// authentication router
app.use("/auth", require("./auth"));
app.use("/routers", require("./routers"));

// for all GET requests, send the index.html
app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname));
});

// handle 404s
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.stat = 404;
  next(err);
});

// error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || "Internal server error");
});

db.sync().then(() => {
  console.log("The database is synced!");
  app.listen(PORT, () =>
    console.log(`
      Listening on port ${PORT}
      http://localhost:3000/
      `)
  );
});
