module.exports = (app, userService) => {
    app.get("/user", async (req, res) => {
        const id = req.query.id;
        const user = await userService.getAchievements(id);
        await userService.getStats(user, id);
        res.status(200).send(user)
    })
}