import mongoose from "mongoose";
import Joi from "joi";
import handleSaveErrors from "../helpers/handleSaveErrors"

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  token: string;
}

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set password for user"],
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
    minlength: 6,
  },
  token: { type: String, default: "" },
}, { versionKey: false, timestamps: true });
UserSchema.post("save", handleSaveErrors);

export const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    repeat_password: Joi.ref("password"),
});

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
});



export const User = mongoose.model<IUser>("User", UserSchema);
