class User {
    constructor(name, id, posts, achievements, userPoints, pinned, profilePicUrl, stats) {
        this.name = name;
        this.id = id;
        this.posts = posts;
        this.achievements = achievements;
        this.userPoints = userPoints;
        this.pinned = pinned
        this.profilePicUrl = profilePicUrl;
        this.stats = stats;
    }
}

module.exports = User;