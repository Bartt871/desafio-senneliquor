import { CareCategory, Status } from "../../Entity/TaskEntity";
import asyncHandler from "../../Handler/AsyncHandler";
import Task from "../../Model/Task";

export interface FilterTaskBody {
    search?: string;
    statuses?: Status[];
    care_categories?: CareCategory[];
    page?: number;
    page_size?: number;
}

const FilterTask = asyncHandler<FilterTaskBody>(
    async (request, response) => {
        const {
            search,
            statuses,
            care_categories: careCategories,
            page,
            page_size: pageSize
        } = request.body;

        const { logged_id: doctorId } = request.session;

        const filteredTasks = await Task.filterTask(
            page as number,
            pageSize as number,
            doctorId as string,
            search,
            careCategories,
            statuses
        );

        response.status(200).json(filteredTasks);
    }
);

export default FilterTask;