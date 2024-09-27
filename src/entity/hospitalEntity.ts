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
        comment: "Name",
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

const HospitalEntity = mongoose.model<IHospital>('hospital', HospitalSchema);

export default HospitalEntity;
