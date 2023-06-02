const Stat = require("./Stat")

class FishCaughtStat extends Stat {
    constructor() {
        super("Number of Fish Caught")
    }

    determineStat(user, posts) {
        // use Array.reduce? 
        // get parseInt working
        let count = 0;
        posts.forEach(post => {
            count += post.numFishes
        })
        return count;
    }
}

module.exports = FishCaughtStat