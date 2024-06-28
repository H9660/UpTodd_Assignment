const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  phone: {
    type: Number,
    required: true,
  },
  babyStage: {
    type: String,
    enum: ["Stage1", "Stage2", "Stage3"],
    required: true,
  },
});

const DemoSession = mongoose.model("DemoSession", demoSchema);

module.exports = DemoSession;
