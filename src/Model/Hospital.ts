import HospitalEntity, { IHospital } from "../Entity/HospitalEntity";

class Hospital {
    static async insertHospital(hospitalData: Omit<IHospital, '_id' | 'createdAt' | 'updatedAt'>): Promise<IHospital> {
        const hospital = new HospitalEntity(hospitalData);
        return await hospital.save();
    }
}

export default Hospital;
