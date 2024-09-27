import mongoose, { Document, Schema } from 'mongoose';

export interface IDoctor extends Document {
    name: string;
    username: string;
    password: string;
}

const DoctorSchema: Schema<IDoctor> = new Schema({
    name: {
        type: String,
        required: true,
        comment: "Name",
    },
    username: {
        type: String,
        required: true,
        unique: true,
        comment: "Login Username",
    },
    password: {
        type: String,
        required: true,
        comment: "Login Password",
    }
}, { timestamps: true });

const DoctorEntity = mongoose.model<IDoctor>('doctor', DoctorSchema);

export default DoctorEntity;
