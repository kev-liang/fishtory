class PostService {
    constructor(mongoDBConnection) {
        this.mongoDBConnection = mongoDBConnection;
    }

    addPost(id, post) {
        this.mongoDBConnection.addPost(id, post)
    }
}

module.exports = PostService;