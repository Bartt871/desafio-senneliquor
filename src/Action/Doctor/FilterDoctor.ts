import asyncHandler from "../../Handler/AsyncHandler";
import Doctor from "../../Model/Doctor";

export interface FilterDoctorBody {
    search?: string;
    page: number;
    page_size: number;
}

const FilterDoctor = asyncHandler<FilterDoctorBody>(
    async (request, response) => {
        const {
            search,
            page,
            page_size: pageSize
        } = request.body;

        const filteredDoctors = await Doctor.filter(page, pageSize, search);

        response.status(200).json(filteredDoctors);
    }
);

export default FilterDoctor;