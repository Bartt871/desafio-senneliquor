import { Router } from "express";

import noAuthRoutes from "./routes-no-auth";
import taskRoutes from "./routes-task";
import hospitalRoutes from "./routes-hospital";
import doctorRoutes from "./routes-doctor";

const router = Router();

router.use('/no-auth', noAuthRoutes);
router.use('/task', taskRoutes);
router.use('/hospital', hospitalRoutes);
router.use('/doctor', doctorRoutes);

export default router;