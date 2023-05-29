class Achievement {
    constructor(points, name, icon) {
        this.points = points;
        this.name = name;
        this.icon = icon;
        this.isCompleted = false;
    }

    determineIsCompleted() {
        throw new Error("Method 'determineIsCompleted()' must be implemented.");
    }
}

module.exports = Achievement;