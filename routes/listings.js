
let Listings = require("../models/listing.js");
let express = require("express");
let app = express();
let mongoose = require("mongoose");
let router = express.Router();

router.get("/",async(req,res)=>{
    let idata = await Listings.find({});
    console.log(idata);
    res.render("./listings/index.ejs",{idata});
})

module.exports = router;