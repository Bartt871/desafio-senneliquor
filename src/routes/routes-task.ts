import { Router } from "express";

import { FilterTaskMiddleware } from "../Middleware/Validation/Task/FilterTaskMiddleware";
import FilterTask from "../Action/Task/FilterTask";

const taskRoutes = Router();

taskRoutes.get('', FilterTaskMiddleware, FilterTask);

export default taskRoutes;