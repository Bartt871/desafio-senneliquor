import { CareCategory, Status } from "../../Entity/TaskEntity";
import asyncHandler from "../../Handler/AsyncHandler";
import Task from "../../Model/Task";

export interface FilterTaskBody {
    search?: string;
    statuses?: Status[];
    care_categories: CareCategory[];
    page: number;
    page_size: number;
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

        const filteredTasks = await Task.filterTask(page, pageSize, search, careCategories, statuses);

        response.status(200).json(filteredTasks);
    }
);

export default FilterTask;