import { Router } from "express";

import StartSession from "../Action/Session/StartSession";
import { StartSessionMiddleware } from "../Middleware/Validation/Session/StartSessionMiddleware";

const noAuthRoutes = Router();

noAuthRoutes.post('', StartSessionMiddleware, StartSession);

export default noAuthRoutes;