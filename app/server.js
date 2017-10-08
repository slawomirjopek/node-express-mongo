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

    cars.create(car, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    })
});

app.get("/cars", (req, res) => {
    cars.find((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

app.delete("/cars/:id", (req, res) => {
    const query = {_id: req.params.id};

    cars.remove(query, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

// @TODO app.put

const port = process.env.PORT || CONFIG.express.port;
app.listen(port, () => {
    console.log(`API server running on ${port} port.`);
});