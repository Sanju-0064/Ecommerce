const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    mobile: { type: String },
    collage: { type: String },
    gender: { type: String },
    isDeactivated: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    resetToken: { type: String },

  },
  {
    timestamps: { createdAt: "createdDate", updatedAt: "updatedDate" }, // Specify custom field names
  }
);

// Hash the password before saving
userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

// Add a method to the schema to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
