let mongoose = require("mongoose");

let listingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        filename:{type:String},
        url:{type:String,default:"",
            set:(v) => v==="" ? "default" : v
        }
        
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});

let listings =  mongoose.model("listings",listingSchema);

module.exports = listings;