import { Router } from "express";
import { FilterDoctorMiddleware } from "../Middleware/Validation/Doctor/FilterDoctorMiddleware";
import FilterDoctor from "../Action/Doctor/FilterDoctor";

const doctorRoutes = Router();

doctorRoutes.get('', FilterDoctorMiddleware, FilterDoctor);

export default doctorRoutes;