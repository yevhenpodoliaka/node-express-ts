import { Response } from "express";
import { IRequest } from "../../middlewares/authenticate";

const getCurrent = async (req: IRequest, res: Response): Promise<void> => {
   const { name, email } = req.user! ;
  res.json({
      user: {
        name,
        email,
      
 
    },
  });
}

export default getCurrent;