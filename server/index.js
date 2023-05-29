const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PostController = require("./controllers/PostController");
const PostService = require("./services/PostService");
const UserController = require("./controllers/UserController")
const UserService = require("./services/UserService");
const AchievementService = require("./services/AchievementService");
const StatService = require("./services/StatService");
const mongoDBConnection = require("./db/MongoDBConnection");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
} else {
    app.use(express.static("../build"));
}

console.log("Starting with env: ", process.env);

let port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postService = new PostService(mongoDBConnection);
PostController(app, postService);
const achievementService = new AchievementService();
const statService = new StatService();
const userService = new UserService(mongoDBConnection, achievementService, statService);
UserController(app, userService);

app.use(cors());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});