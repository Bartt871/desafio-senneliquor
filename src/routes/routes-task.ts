import { Router } from "express";

import { FilterTaskMiddleware } from "../middleware/validation/Task/filterTaskMiddleware";
import FilterTask from "../action/Task/FilterTask";

const taskRoutes = Router();

taskRoutes.get('', FilterTaskMiddleware, FilterTask);

export default taskRoutes;