import mongoose from "mongoose";

const uri : string = "mongodb+srv://shreepatil1788:CaRP0S77C7YlwcJD@jobwise.prenvky.mongodb.net/?retryWrites=true&w=majority&appName=jobwise"

export const dbConnect = async() => {
    await mongoose.connect(uri).then(() => {
        console.log("database connected");
    }).catch((e) => {
        console.log(e);
    }) 
}