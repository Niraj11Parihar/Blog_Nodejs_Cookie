const express = require("express");


const {
  loginpage,
  Logout,
  home,
  loginProcess,
  insertData,
  addblog,
  viewblog,
  deleteData,
  signup,
  signupProcess,
  profile,
  addproduct,
  shopPage,
  getProfile,
} = require("../controllers/controllers");


const multer = require('multer');
const  authenticateJWT  = require("../middleware/jwt");
const router = express.Router();

const fileUpload = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploads = multer({ storage: fileUpload }).single('image');

router.post("/loginprocess", loginProcess);
router.get("/Login", loginpage);
router.get("/Logout", Logout);
router.get("/",authenticateJWT, home);
router.get("/signup", signup);
router.post("/Signup", signupProcess);
router.post("/addblog", uploads, insertData);
router.post("/editblog", uploads, insertData);
router.get("/addblog", addblog);
router.get("/viewblog", viewblog);
router.get("/deleteData/:id", deleteData);
router.get("/profile",authenticateJWT,profile)
router.get("/addproduct",addproduct)
router.get("/shop",authenticateJWT,shopPage)
router.get("/profile",getProfile)

module.exports = router;
