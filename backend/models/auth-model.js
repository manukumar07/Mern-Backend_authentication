// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");


// // Define the User schema
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });


// ////

// //? secure the password with the bcrypt
// userSchema.pre("save", async function () {
//   const user = this;
//   console.log("actual data ", this);

//   if (!user.isModified) {
//     return next();
//   }

//   try {
//     const saltRound = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(user.password, saltRound);
//     user.password = hashedPassword;
//   } catch (error) {
//     return next(error);
//   }
// });

// // okens, such as JWTs (JSON Web Tokens), are typically not stored in the database along with other user details. Instead, they are issued by the server during the authentication process and then stored on the client-side (e.g., in cookies or local storage) for later use.

// // What is JWT?

// // JSON Web Tokens (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

// // JWTs are often used for authentication and authorization in web applications.

// // Authentication: Verifying the identity of a user or client.

// // Authorization: Determining what actions a user or client is allowed to perform.

// // Components of a JWT:

// // Header: Contains metadata about the token, such as the type of token and the signing algorithm being used.

// // Payload: Contains claims or statements about an entity (typically, the user) and additional data. Common claims include user ID, username, and expiration time.

// // Signature: To verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way, a signature is included.
// //? Generate JSON Web Token
// userSchema.methods.generateToken = async function () {
//   console.log("I am token");
//   try {
//     return jwt.sign(
//       {
//         userId: this._id.toString(),
//         email: this.email,
//         isAdmin: this.isAdmin,
//       },
//       process.env.JWT_SECRET_KEY,
//       {
//         expiresIn: "30d",
//       }
//     );
//   } catch (error) {
//     console.error("Token Error: ", error);
//   }
// };

// const userCreated = await User.create({ username, email, phone, password });
// // res.status(201).json({ message: "User registered successfully" });
// res.status(201).json({
//   msg: "Registration Successful",
//   token: await userCreated.generateToken(),
//   userId: userCreated._id.toString(),
// });

// // comparePassword
// userSchema.methods.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };




// // define the model or the collection name
// export const User = new mongoose.model("USER", userSchema);

///////////////////
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash the password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// Generate JSON Web Token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error("Token Error: ", error);
  }
};

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Define the model
const User = mongoose.model("User", userSchema);

module.exports = User;
