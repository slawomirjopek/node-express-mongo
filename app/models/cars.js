import mongoose from "mongoose";

const carsSchema = mongoose.Schema({
    manufacturer: String,
    model: String,
    price: Number,
    year: Number,
    milage: Number,
    used: Boolean
});

export default mongoose.model("Cars", carsSchema);