let express = require("express");
let app = express();
let mongoose = require("mongoose");
app.set("view engine","ejs");
let path = require("path");
let ejsMate = require("ejs-mate");
app.set("views",path.join(__dirname,"views"));
app.engine('ejs',ejsMate);
let listings = require("./routes/listings.js");
app.use(express.static(path.join(__dirname,"/public")));



main()
.then(()=>{
    console.log("connected DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wander77');
}



app.listen(3000,()=>{
    console.log("server connected");
})

app.use("/listings",listings);

