const mongoose = require("mongoose")

const subcategory = new mongoose.Schema(
    {
        subcategory:String,
        catId : {type: mongoose.Schema.Types.ObjectId,ref: "category"}
    }
)

const subCategory = new mongoose.model("subcategory",subcategory)

module.exports = subCategory