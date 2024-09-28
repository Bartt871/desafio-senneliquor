import { Router } from "express";

import StartSession from "../action/Session/StartSession";
import { StartSessionMiddleware } from "../middleware/validation/Session/startSessionMiddleware";

const noAuthRoutes = Router();

noAuthRoutes.post('', StartSessionMiddleware, StartSession);

export default noAuthRoutes;