// models/Hospital.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IHospital extends Document {
    name: string;
    latitude: number;
    longitude: number;
}

const HospitalSchema: Schema<IHospital> = new Schema({
    name: {
        type: String,
        required: true,
        comment: "Nome",
    },
    latitude: {
        type: Number,
        required: true,
        comment: "Latitude",
    },
    longitude: {
        type: Number,
        required: true,
        comment: "Longitude",
    },
}, { timestamps: true });

const HospitalEntity = mongoose.model<IHospital>('Hospital', HospitalSchema);

export default HospitalEntity;
