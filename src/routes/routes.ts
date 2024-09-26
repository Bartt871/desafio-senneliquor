import { Router } from "express";

import StartSession from "../action/Session/StartSession";

const router = Router();

router.post('/no-auth', StartSession);

export default router;