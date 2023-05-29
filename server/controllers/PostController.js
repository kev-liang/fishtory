module.exports = (app, postService) => {
    app.get("/new-post", (req, res) => {
        const id = req.query.id;
        const post = req.body;
        postService.addPost(id, post);
        res.status(200).send("NEW POST")
    })
}