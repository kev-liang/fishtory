const Constants = require("../config/Constants")
const BiggestFishStat = require("../model/stats/BiggestFishStat");
const FishCaughtStat = require("../model/stats/FishCaughtStat");

class StatService {
    constructor() {
        this.stats = {
            [Constants.BIGGEST_FISH_STAT_ID]: new BiggestFishStat(),
            [Constants.FISH_CAUGHT_STAT_ID]: new FishCaughtStat(),
        }
    }

    determineStat(statId, user, posts) {
        return this.stats[statId].determineStat(user, posts);
    }
}

module.exports = StatService;