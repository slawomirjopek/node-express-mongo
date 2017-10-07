import express from "express";

const app = new express();

app.get("/", function (req, res) {
    res.send("Server running :)")
});

const port = process.env.PORT || 1111;
app.listen(port, () => {
    console.log(`API server running on ${port} port.`);
});