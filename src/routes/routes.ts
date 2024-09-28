import { Router } from "express";

import noAuthRoutes from "./routes-no-auth";
import taskRoutes from "./routes-task";

const router = Router();

router.use('/no-auth', noAuthRoutes);
router.use('/task', taskRoutes);

export default router;