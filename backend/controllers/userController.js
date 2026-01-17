import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, msg: "User does't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      return res.json({ success: true, token });
    } else {
      return res.json({
        success: false,
        msg: "Invalid Credinatials",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      msg: error.msg,
    });
  }
};

// Route for userRegistration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Checking user exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, msg: "User Already exists" });
    }

    // Validating email format and password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "Invalid Email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        msg: "Please Enter a Strong Password.",
      });
    }
    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // Creating token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      msg: error.msg,
    });
  }
};

// Route for Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, msg: "Invalid Credentials." });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.msg });
  }
};

export { loginUser, registerUser, adminLogin };
