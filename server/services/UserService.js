const StatConfig = require("../config/StatConfig");

class UserService {
    constructor(mongoDBConnection, achievementService, statService) {
        this.mongoDBConnection = mongoDBConnection;
        this.achievementService = achievementService;
        this.statService = statService;
    }

    async getAchievements(id) {
        const user = await this.mongoDBConnection.getUser(id); 
        const posts = await this.mongoDBConnection.getPosts(id);
        const achievementsCompleted = user.achievements.map(achievement => {
            return this.achievementService.determineIsCompleted(achievement.id, posts)
        })
        // TODO remove name, icon points keys
        // const achievementsOnlyIdAndCompleted = achievementsCompleted.forEach(achievement => {
        //     delete achievement.name;
        //     delete achievement.icon;
        //     delete achievement.points;
        // })
        // user.achievements = achievementsOnlyIdAndCompleted;
        user.achievements = achievementsCompleted;
        this.mongoDBConnection.saveUser(user);
        return user;
    }
    
    async getStats(user, id) {
        console.log("stats", user)
        const posts = await this.mongoDBConnection.getPosts(id);
        const determinedStats = StatConfig.map(statId => {
            return this.statService.determineStat(statId, user, posts)
        })
        user.stats = determinedStats;
    }
}

module.exports = UserService;