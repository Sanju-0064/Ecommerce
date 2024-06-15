const express = require("express");
const router = express.Router();
const { Admin, User } = require("../model");
const async = require("async");

router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email });
  if (admin) {
    const isPasswordMatch = await admin.comparePassword(password);

    if (isPasswordMatch) {
      const { password: _, __v: __vField, ...adminW } = admin.toObject();
      res.send({ success: true, response: adminW, message: "Login success." });
    } else {
      res.send({
        success: false,
        response: null,
        message: "Invalid credentials.",
      });
    }
  } else {
    res.send({
      success: false,
      response: null,
      message: "Invalid credentials.",
    });
  }
});

router.get("/api/dashboard", async function (req, res) {
  try {
    const activeUsers = await User.countDocuments({
      isDeleted: false,
      isDeactivated: false,
    });
    const inactiveUsers = await User.countDocuments({
      isDeleted: false,
      isDeactivated: true,
    });
    // const activeCity = await City.countDocuments({
    //   isDeleted: false,
    //   isDeactivated: false,
    // });
    // const activeProperty = await Property.countDocuments({
    //   isDeleted: false,
    //   isDeactivated: false,
    // });
    const users = await User.find({ isDeleted: false })
      .select("name email mobile isDeactivated")
      .sort({ createdDate: -1 })
      .limit(5);

    res.send({
      success: true,
      response: { activeUsers, inactiveUsers, users },
      message: "Dashboard details successfully fetched.",
    });
  } catch (error) {
    res.send({
      success: false,
      response: error,
      message: "Something went wrong!",
    });
  }
});

router.post("/api/update-profile", async (req, res) => {
  try {
    const { _id, name, mobile, gender } = req.body;
    let obj = { name, mobile, gender };
    const updatedAdmin = await Admin.findByIdAndUpdate(
      _id,
      { $set: obj },
      { new: true } // Return the modified document
    );
    if (updatedAdmin) {
      const {
        password: _,
        __v: __vField,
        ...updatedAdminW
      } = updatedAdmin.toObject();

      res.send({
        success: true,
        response: updatedAdminW,
        message: "Admin profile succesfully updated.",
      });
    } else {
      res.send({
        success: false,
        response: null,
        message: "An error occured.",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      response: error,
      message: "An error occured.",
    });
  }
});

router.post("/api/users-list", async function (req, res) {
  try {
    const users = await User.find({ isDeleted: false })
      .select("name email mobile isDeactivated")
      .sort({ createdDate: -1 });
    res.send({
      success: true,
      response: users,
      message: "Users get suceessfully.",
    });
  } catch (error) {
    res.send({
      success: false,
      response: error,
      message: "Something went wrong!",
    });
  }
});

router.post("/api/decactivate-user",async function(req,res){
  try {

    let {id,status} = req.body;
    let obj = { isDeactivated:status };
    const user = await User.findByIdAndUpdate(
      id,
      { $set: obj },
      { new: true } // Return the modified document
    );

    if(user){
      res.send({
        success: true,
        response: {},
        message: `User status ${status?"deactivated":"activated"}.`
      });

    }else{
      res.send({
        success: false,
        response: null,
        message: "An error occured!",
      });
    }

    
  } catch (error) {
    res.send({
      success: false,
      response: error,
      message: "Something went wrong!",
    });
  }
})

router.post('/api/delete-user',async function(req,res){
  try {

    let {id,status} = req.body;
    let obj = { isDeleted:status };
    const user = await User.findByIdAndUpdate(
      id,
      { $set: obj },
      { new: true } // Return the modified document
    );

    if(user){
      res.send({
        success: true,
        response: {},
        message: `User successfully deleted.`
      });

    }else{
      res.send({
        success: false,
        response: null,
        message: "An error occured!",
      });
    }

    
  } catch (error) {
    res.send({
      success: false,
      response: error,
      message: "Something went wrong!",
    });
  }
})

module.exports = router;
