const Constants = require("../config/Constants")
const FirstFishCaughtAchievement = require("../model/achievements/FirstFishCaughtAchievement")
class AchievementService {
    constructor() {
        this.achievements = {
            [Constants.FIRST_FISH_CAUGHT_ACHIEVEMENT_ID]: new FirstFishCaughtAchievement()
        }
    }

    determineIsCompleted(achievementId, posts) {
        return this.achievements[achievementId].determineIsCompleted(posts);
    }
}

module.exports = AchievementService;