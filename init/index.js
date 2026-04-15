const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL ="mongodb+srv://rairinki6:K8AkNYSt1TCotcKO@cluster0.5ijd5wq.mongodb.net/wanderlust?retryWrites=true&w=majority&appName=Cluster0";

main().then(() =>{
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL );

}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, 
        owner: "681a2b147e7d4f12c42647a4"
    }));
    await Listing.insertMany(initData.data);
    console.log("data was intialized");
};

initDB();