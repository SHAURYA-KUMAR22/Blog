// https://cloud.mongodb.com/v2/6231e1e30ab39964261693b4#/security/database/users
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth") //to check in postman
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

const multer = require("multer");


dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to mongoDB"))    
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
    //take filename of what we are providing in client and it saves it to images folder in api
    destination:(req,file,cb) => {
      cb(null, "images")
    },
    filename:(req,file,cb) => {
      cb(null,"hello.jpeg")
    }
  })

  const upload = multer({storage:storage});
  app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("fle is uploaded!")
  })

  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/posts", postRoute);
  app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
  console.log("server running on port 5000...");
});
