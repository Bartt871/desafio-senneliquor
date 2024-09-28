import { Router } from "express";
import { FilterHospitalMiddleware } from "../Middleware/Validation/Hospital/FilterHospitalMiddleware";

import FilterHospital from "../Action/Hospital/FilterHospital";

const hospitalRoutes = Router();

hospitalRoutes.get('', FilterHospitalMiddleware, FilterHospital);

export default hospitalRoutes;