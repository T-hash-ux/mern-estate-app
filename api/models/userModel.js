import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    avatar:{
        type: String,
        default: "https://lh3.googleusercontent.com/a/ACg8ocI3urwYIdLm1wYhEIe8_6bhNfqyFoZir4c7gaL0xPZ_ZUI=s96-c"

    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;