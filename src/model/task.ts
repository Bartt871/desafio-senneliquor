import TaskEntity, { ITask, Status } from "../entity/taskEntity";

class Task {
    static async filterTask(
        page: number,
        pageSize: number,
        statuses?: Status[]
    ): Promise<{ total: number; tasks: ITask[]; }> {
        const filter: any = {};

        if (statuses) {
            filter.status = { $in: statuses };
        }

        const total = await TaskEntity.countDocuments(filter);

        if (!total) {
            return { total: 0, tasks: [] };
        }

        const skip = (page - 1) * pageSize;
        const tasks = await TaskEntity.find(filter).skip(skip).limit(pageSize).exec();

        return { total: total, tasks: tasks }
    }
}

export default Task;
