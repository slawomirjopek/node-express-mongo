import express from "express";
import mongoose from "mongoose";
import CONFIG from "./config/config";
import cars from "./models/cars";

mongoose.connect(`mongodb://${CONFIG.db.host}:${CONFIG.db.port}/${CONFIG.db.name}`);

const app = new express();

app.post("/cars", function (req, res) {
    const car = req.body;

    cars.create(car, (err, cars) => {
        if (err) {
            throw err;
        }
        res.json(cars);
    })
});

const port = process.env.PORT || CONFIG.express.port;
app.listen(port, () => {
    console.log(`API server running on ${port} port.`);
});