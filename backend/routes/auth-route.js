
//? In Express.js, express.Router() is a mini Express application without all the server configurations but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularize your routes and middleware to keep your code organized and maintainable.
//* <https://expressjs.com/en/guide/routing.html>
//? Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
// Correct the path based on the actual directory structure
const validateMiddleware = require('../middleware/validate-middleware');
const signupSchema = require("../validators/auth-validator");
const validate  = require('../middleware/validate-middleware');



// 1st method
// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to my home page");
// });

// 2nd method
// router.route("/").get((req, res) => {
//   res.status(200).send("Welcome to home page");
// });


// router.route("/signup").get((req, res) => {
//   res.status(200).json({ msg: "registration successful from router" });
// });

router.route("/").get(authControllers.home);
router.route("/signup").post(validate(signupSchema), authControllers.signup)
router.route("/login").post(authControllers.login);



module.exports = router
