import { Schema } from "mongoose";
import TaskEntity, { CareCategory, ITask, Status } from "../Entity/TaskEntity";

class Task {
    static async filterTask(
        page: number,
        pageSize: number,
        doctorId: string,
        search?: string,
        careCategories?: CareCategory[],
        statuses?: Status[]
    ): Promise<{ total: number; tasks: ITask[]; }> {
        const filter: any = { doctor_id: doctorId };

        if (careCategories) {
            filter.care_category = { $in: careCategories };
        }

        if (statuses) {
            filter.status = { $in: statuses };
        }

        if (search) {
            const regexPattern = search
                .split(' ')
                .map(term => term.replace(/[\u0300-\u036f]/g, ''))
                .join('|');

            filter.patient_name = { $regex: new RegExp(regexPattern, 'i') };
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
