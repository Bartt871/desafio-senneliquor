import { Status } from "../../entity/taskEntity";
import asyncHandler from "../../handler/AsyncHandler";
import Task from "../../model/task";

export interface FilterTaskBody {
    statuses?: Status[];
    page: number;
    page_size: number;
}

const FilterTask = asyncHandler<FilterTaskBody>(
    async (request, response) => {
        const {
            statuses,
            page,
            page_size: pageSize
        } = request.body;

        const filteredTasks = await Task.filterTask(page, pageSize, statuses);

        response.status(200).json(filteredTasks);
    }
);

export default FilterTask;