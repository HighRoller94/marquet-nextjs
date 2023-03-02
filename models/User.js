import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        maxlength: 60,
    },
    password: {
        type: String,
        required: true,
        maxlength: 10,
    },
    email: {
        type: String,
        required: true,
        maxlength: 60,
    }
},
{ timestamps: true}
);

export default mongoose.models.User || mongoose.model("User", UserSchema);