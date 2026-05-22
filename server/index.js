const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;
const homePage = require("./routes/home.js");

app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    res.json({
        message: "hello backend here"
    })
})
// app.use("/", homePage);



app.listen(port, () => console.log("The app is listening on the port : ", port));