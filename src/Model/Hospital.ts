import HospitalEntity, { IHospital } from "../Entity/HospitalEntity";

class Hospital {
    static async filter(
        page: number,
        pageSize: number,
        search?: string
    ): Promise<{ total: number; hospitals: IHospital[]; }> {
        const filter: any = {};
        if (search) {
            const regexPattern = search
                .split(' ')
                .map(term => `\\b${term.replace(/[\u0300-\u036f]/g, '')}\\b`)
                .join('|');
            filter.name = { $regex: new RegExp(regexPattern, 'i') };
        }

        const total = await HospitalEntity.countDocuments(filter);

        if (!total) {
            return { total: 0, hospitals: [] };
        }

        const skip = (page - 1) * pageSize;
        const hospitals = await HospitalEntity.find(filter).skip(skip).limit(pageSize).exec();

        return { total: total, hospitals: hospitals }
    }
}

export default Hospital;
