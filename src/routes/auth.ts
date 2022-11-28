import express, {Router} from "express";

import * as ctrl from "../controllers/auth";

import {validateBody, authenticate,ctrlWrapper} from "../middlewares";
import { registerSchema, loginSchema } from "../models/User";

const router: Router = express.Router();


router.post("/register", validateBody(registerSchema), ctrlWrapper(ctrl.register));

router.post("/login", validateBody(loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));



export default router;