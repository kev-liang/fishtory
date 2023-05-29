const Constants = require("../config/Constants")
const BiggestFishStat = require("../model/stats/BiggestFishStat");

class StatService {
    constructor() {
        this.stats = {
            [Constants.BIGGEST_FISH_STAT_ID]: new BiggestFishStat(),
        }
    }

    determineStat(statId, user, posts) {
        return this.stats[statId].determineStat(user, posts);
    }
}

module.exports = StatService;