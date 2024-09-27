import { Router } from "express";

import StartSession from "../action/Session/StartSession";
import { StartSessionMiddleware } from "../middleware/validation/Session/startSessionMiddleware";

const router = Router();

router.post('/no-auth', StartSessionMiddleware, StartSession);

export default router;