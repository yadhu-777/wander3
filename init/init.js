let idata  = require("./data.js");
let mongoose = require("mongoose");
let Listings = require("../models/listing.js");

main()
.then(()=>{
    console.log("connected DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wander77');
}

let initData = async(req,res)=>{
    await Listings.deleteMany({});
    let ress = await  Listings.insertMany(idata.data);
    console.log(ress);


}

initData();



