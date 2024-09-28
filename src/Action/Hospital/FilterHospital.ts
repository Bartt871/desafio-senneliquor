import asyncHandler from "../../Handler/AsyncHandler";
import Hospital from "../../Model/Hospital";

export interface FilterHospitalBody {
    search?: string;
    page: number;
    page_size: number;
}

const FilterHospital = asyncHandler<FilterHospitalBody>(
    async (request, response) => {
        const {
            search,
            page,
            page_size: pageSize
        } = request.body;

        const filteredHospitals = await Hospital.filter(page, pageSize, search);

        response.status(200).json(filteredHospitals);
    }
);

export default FilterHospital;