class Stat {
    constructor(name) {
        this.name = name;
        this.value = "";
    }

    determineStat(user, posts) {
        throw new Error("Method 'determineStat()' must be implemented.");
    }
}

module.exports = Stat;