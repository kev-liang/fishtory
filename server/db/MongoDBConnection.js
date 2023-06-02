const { MongoClient } = require("mongodb");

class MongoDBConnection {
  constructor() {
    // const uri = this.getUri();
    // this.client = new MongoClient(uri);
    // this.init();
  }

  getUri() {
    let user, password;
    if (process.env.NODE_ENV === "production") {
      user = process.env.DB_USER;
      password = process.env.DB_PASSWORD;
    } else {
      const dbSecrets = require("../config/dbSecrets.json");
      user = dbSecrets.user;
      password = dbSecrets.password;
    }
    return `mongodb+srv://${user}:${password}@cluster0.16qkd.mongodb.net/?retryWrites=true&w=majority`;
  }

  async addPost(userId, post) {
    // let postCollection = this.client
    //   .db("fishstory")
    //   .collection("posts");
    // const player = await postCollection.findOne({ _id: "6473bb1a284bef653f8ed19a" });
    // console.log("FOUND", player)
      return [{ size: 10, numFishes: 2 }]
  }

  async getPosts(userId, post) {
    return [{size: 10}]
  }

  async getUser(id) {
    // let userCollection = this.client
    //   .db("fishstory")
    //   .collection("users");
      return {
        achievements: [{
            id: 1,
            isCompleted: false
        }]
      }
  }

  async saveUser(user) {
    return;
  }
  
  async init() {
    await this.client.connect();
  }

  async close() {
    await this.client.close();
  }
}

module.exports = new MongoDBConnection();