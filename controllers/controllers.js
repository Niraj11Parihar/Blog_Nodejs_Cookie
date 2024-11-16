  const bcrypt = require("bcrypt"); 
const userModel = require("../models/user.Schema");
const blogModel = require("../models/Blog.Schema");
const productModel = require("../models/product.Schema");
const passport = require("../middleware/passportconfig");
const fs = require("fs");
let path = require("path");

const loginpage = async (req, res) => {
  try {
    res.render("Login");
  } catch (error) {
    console.log(error);
    res.send("Unable to render login page");
  }
};

const loginProcess = async (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send(info.message);
    }
    req.logIn(user, async (err) => {
      if (err) {
        return next(err);
      }
      req.flash("logged-in","Successfully Logged-in")
      let data = await blogModel.find({});
      return res.render("blogPage", { data, message: req.flash("logged-in")});
    });
  })(req, res, next);
};

const signup = async (req, res) => {
  try {
    res.render("Signup");
  } catch (error) {
    console.log(error);
    res.send("Unable to render signup page");
  }
};

const Logout = async (req, res) => {
  try {
    req.logOut((err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Logout failed");
      }

      // Destroy the session
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Failed to destroy session");
        }
        res.clearCookie("connect.sid"); 

        res.render("Login");
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
};

const signupProcess = async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ username });
    const existingEmail = await userModel.findOne({ email });

    if (existingUser) {
      res.send("Username already exists");
      return false;
    }
    if (existingEmail) {
      res.send("Email already exists");
      return false;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    console.log(password)
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.send("Unable to create user");
  }
};

const home = async (req, res) => {
  try {
    let data = await blogModel.find({});
    res.render("blogPage", { data, message: req.flash("logged-in")});
  } catch (error) {
    console.log("Unable to render home page");
    res.status(404).send("The server cannot find the requested resource!");
  }
};

const addblog = async (req, res) => {
  try {
    res.render("addblog");
  } catch (error) {
    console.log(error);
    res.status(404).send("Unable to redirect to addblog page");
  }
};

const viewblog = async (req, res) => {
  try {
    let data = await blogModel.find({});
    res.render("viewblog", { data });
  } catch (error) {
    console.log(error);
    res.status(404).send("Unable to redirect to viewblog page");
  }
};

const insertData = async (req, res) => {
  const { title, date, description, id } = req.body;
  let image = req.file ? req.file.path : null;

  if (id) {
    try {
      let blog = await blogModel.findById(id);
      if (!blog) {
        return res.status(404).send("Blog post not found!");
      }

      if (req.file) {
        if (blog.image && typeof blog.image === "string") {
          fs.unlinkSync(blog.image); // Delete the old image if it exists
        }
        blog.image = image;
      }

      await blogModel.findByIdAndUpdate(id, {
        title,
        date,
        image: blog.image,
        description,
      });
      res.redirect("/viewblog");
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send("The server cannot process the request to update the blog!");
    }
  } else {
    if (!image) {
      return res.status(400).send("Image is required for new blog posts!");
    }

    try {
      await blogModel.create({
        title,
        date,
        image,
        description,
      });
      res.redirect("/blogPage");
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send("The server cannot process the request to create the blog!");
    }
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    let blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).send("Blog post not found!");
    }

    if (blog.image) {
      fs.unlinkSync(blog.image); // Delete the old image if it exists
    }

    await blogModel.findByIdAndDelete(id);
    res.redirect("/viewblog");
  } catch (err) {
    console.log(err);
    res.status(500).send("Issue in deleting the data");
  }
};

const profile = async (req, res) => {
  try {
    const user = req.user;
    res.render("profile", { user });
  } catch (error) {
    console.log(error)
    res.send("Unable to get profile")
  }
};

const addproduct = async (req,res) => {
  try {
    const product = await productModel.find({});
    req.flash("product-added","Product Added Successfully!")
    res.render("addproduct", { product, message : req.flash("product-added") });
  } catch (error) {
    console.log(error)
    res.send("Unable to get profile")
  }
}

let shopPage = async (req,res) => {
  try {
    let data = await productModel.find({})
  return res.render("shop",{data}); 
  } catch (error) {
    res.status(404).send(error.message)
  }
}



module.exports = {
  loginpage,
  insertData,
  addblog,
  viewblog,
  deleteData,
  signup,
  signupProcess,
  Logout,
  loginProcess,
  home,
  profile,
  addproduct,
  shopPage
};
