const mongoose = require("mongoose")

const category = new mongoose.Schema(
    {
        category:String
    }
)

const Category = new mongoose.model("category",category)

module.exports = Category