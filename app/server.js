import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import CONFIG from "./config/config";
import cars from "./models/cars";

mongoose.connect(`mongodb://${CONFIG.db.host}:${CONFIG.db.port}/${CONFIG.db.name}`);

const app = new express();
app.use(bodyParser.json());

app.post("/cars", (req, res) => {
    const car = req.body;
    cars.create(car, responseHandler.bind(res));
});

app.get("/cars", (req, res) => {
    cars.find(responseHandler.bind(res));
});

app.delete("/cars/:id", (req, res) => {
    const query = {_id: req.params.id};
    cars.remove(query, responseHandler.bind(res));
});

app.put("/cars/:id", (req, res) => {
    const query = {_id: req.params.id};
    const update = {
        "$set": {...req.body}
    };
    const options = {
        new: false
    };
    cars.findOneAndUpdate(query, update, options, responseHandler.bind(res));
});

const port = process.env.PORT || CONFIG.express.port;
app.listen(port, () => {
    console.log(`API server running on ${port} port.`);
});

function responseHandler(err, data) {
    if (err) throw err;
    this.json(data);
}