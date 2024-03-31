const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhishekhinduja2:lk41WyoDYn5XhIZT@build.goeyfma.mongodb.net/?retryWrites=true&w=majority&appName=Build/LoginSignUpTutorial")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Connection failed:", error.message);
  });

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("Collection1", LogInSchema);

module.exports = collection;
