import { Router } from "express";

import { FilterTaskMiddleware } from "../Middleware/Validation/Task/FilterTaskMiddleware";
import FilterTask from "../Action/Task/FilterTask";
import DoctorMiddleware from "../Middleware/Session/DoctorMiddleware";

const taskRoutes = Router();

taskRoutes.get('', DoctorMiddleware, FilterTaskMiddleware, FilterTask);

export default taskRoutes;