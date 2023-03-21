import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        maxlength: 60,
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique:true,
        maxlength: 60,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        maxlength: 60,
    },
},
{ timestamps: true}
);

export default mongoose.models.User || mongoose.model("User", UserSchema); 
 