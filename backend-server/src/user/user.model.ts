import mongoose,{Schema, Document} from "mongoose";

// interface of our model user
export interface IUser extends Document {
    firstName : string;
    email: string;
    lastName?: string;
    password: string;
    imageUrl?: string;


}

const UserSchema: Schema = new Schema({
    firstName : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    lastName : {type: String, default: "lastName"},
    imageUrl : {type: String},

});

export default mongoose.model<IUser>("User",UserSchema);

