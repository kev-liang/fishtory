const Stat = require("./Stat")

class BiggestFishStat extends Stat {
    constructor() {
        super("Biggest Fish")
    }

    determineStat(user, posts) {
        // google how to make this better
        let max = -1;
        let maxPost;
        posts.forEach(post => {
            if (post.size > max) {
                max = post.size;
                maxPost = post
            }
        })
        return maxPost;
    }
}

module.exports = BiggestFishStat;