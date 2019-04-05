var express = require("express");
var router = express.Router();
var proxy = require("../api/proxy");
var axios = require("axios");
var url = require("../api/api").url;

// var mongoose = require('mongoose');
// var userSchema = require('../models/user');
// var User = mongoose.model('User', userSchema); // if you have mongodb

function authChecker(req, res, next) {
  console.log("authChecker session ", req.session);
  if (req.session.user) {
    next();
  } else {
    console.log("auth checker");
    res.redirect("/login");
  }
  next();
}

function roleObj(req) {
  return { title: "HACKATHON", username: req.session.username };
}

/* GET home page. */
// add authChecker as middleware
router.get("/", function(req, res, next) {
  console.log("sess ", roleObj(req));
  res.render("index", roleObj(req));
});

router.get("/login", function(req, res, next) {
  res.render("login", { title: "Login", error: "", success: "" });
});

router.get("/register", function(req, res, next) {
  res.render("register", { title: "Register", error: "", success: "" });
});

router.get("/logout", function(req, res, next) {
  console.log("logging you out");
  req.session.destroy();
  res.redirect("/login");
});

router.post("/register", function(req, res, next) {
  // console.log('register req.body ', req.body)
  //check if existing
  var { firstName, lastName, address, contact, username, password } = req.body;
  console.log("body ", req.body);

  axios
    .post(url + "persons", {
      firstName,
      lastName,
      address,
      contact,
      username,
      password
    })
    .then(function(response) {
      console.log("response", response);
      if (response.data.message === "Data Insert Succesful") {
        // req.session.user = username;
        res.redirect("register", {
          title: "Login",
          error: "",
          success: "Success Creating User. Please Log in"
        });
      } else {
        res.render("register", {
          title: "Register",
          error: "Something went wrong.",
          success: ""
        });
      }
    })
    .catch(function(error) {
      console.log("error", error);
    });
});

router.post("/login", function(req, res, next) {
  var { username, password } = req.body;

  console.log("username", username);
  console.log("password", password);

  axios
    .post(url + "login", {
      username: username,
      password: password
    })
    .then(function(response) {
      console.log("url ", response.data);
      if (response.data.data) {
        req.session.username = username;
        res.redirect("/");
      } else {
        res.render("login", {
          title: "Login",
          error: response.data.message,
          success: ""
        });
      }
    })
    .catch(function(error) {
      console.log("error");
      console.log(error);
    });
});

module.exports = router;
