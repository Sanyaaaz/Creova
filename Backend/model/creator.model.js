import mongoose from "mongoose";
const creatorschema=mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    subscription:String,
    image:String

});
const Creator = mongoose.model("Creator", creatorschema);

export default Creator;
