import {Document} from "mongoose";
import { IRequestError } from "../interfaces";

const handleSaveErrors = (error: IRequestError, _: Document, next: () => void) => {
    const {name, code} = error;
    if(name === "MongoServerError" && code === 11000) {
        error.status = 409;
    }
    error.status = 400;
    next()
}

export default handleSaveErrors;