import { Response } from "express";
import { IRequest } from "../../middlewares/authenticate";
import {User} from "../../models/User";

const logout = async(req: IRequest, res: Response): Promise<void> => {
    await User.findByIdAndUpdate(req.user?.id, {token: ""});
    res.status(204).send();
}

export default logout;