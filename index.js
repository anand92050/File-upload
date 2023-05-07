const express = require("express");
const app = express();



require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware add krna hai

app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload);

// database se connsct krna hai

const db = require("./config/database");
db.connect();

//cloudinary se connect krna hai
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//mount krna hai
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload",Upload);

//server ko activate krna hai

app.listen(PORT,()=>{
    console.log(`Server is activated at ${PORT}`);
})

