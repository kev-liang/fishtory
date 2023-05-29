const Achievement = require("./Achievement")
class FirstFishCaughtAchievement extends Achievement {
    constructor() {
        super(10, "First Fish Caught", "test")
    }

    determineIsCompleted(posts) {
        this.isCompleted = posts.length > 0;
        return this;
    }
}

module.exports = FirstFishCaughtAchievement;

