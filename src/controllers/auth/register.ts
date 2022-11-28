import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import  {User,IUser} from "../../models/User";
import { RequestError } from "../../helpers";

const register = async(req: Request, res: Response): Promise<void> | never => {
    const {email, password,name} = req.body;
    const user: IUser | null = await User.findOne({email});
    if(user) {
        throw RequestError(409, `User with ${email} is already exist`)
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result: IUser = await User.create({name,email, password: hashPassword});
    res.status(201).json({
        email: result.email,
    })
}

export default register;