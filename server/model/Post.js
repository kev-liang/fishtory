class Post {
    constructor(picture, numFishes, species, size, location, bait, time, weather, temp, userId, id) {
        this.picture = picture;
        this.numFishes = numFishes;
        this.species = species;
        this.size = size;
        this.location = location;
        this.bait = bait; 
        this.time = time;
        this.weather = weather;
        this.temp = temp;
        this.userId = userId;
        this.id = id;
    }
}

module.exports = Post;