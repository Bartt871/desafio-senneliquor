import mongoose, { Document, ObjectId, Schema } from 'mongoose';

type CareCategoryEmergency = 1;
type CareCategoryInpatient = 2;

export type CareCategory = CareCategoryEmergency | CareCategoryInpatient;

type BiologicalGenderMale = 'M';
type BiologicalGenderFemale = 'F';
type BiologicalGenderNotInformed = 'N';

export type BiologicalGender = BiologicalGenderMale | BiologicalGenderFemale | BiologicalGenderNotInformed;

type StatusOpen = 'A';
type StatusClosed = 'E';
type StatusCancelled = 'C';

export type Status = StatusOpen | StatusClosed | StatusCancelled;

export interface ITask extends Document {
    _id: ObjectId;
    hospital_id: ObjectId;
    doctor_id: ObjectId;
    care_category: CareCategory;
    patient_name: string;
    patient_biological_gender: BiologicalGender;
    status: Status;
}

const TaskSchema: Schema<ITask> = new Schema({
    hospital_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        comment: "Código do Hospital",
    },
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        comment: "Código do Médico",
    },
    care_category: {
        type: Number,
        required: true,
        enum: [1, 2],
        comment: "Categoria do Atendimento",
    },
    patient_name: {
        type: String,
        required: true,
        comment: "Nome do Paciente",
    },
    patient_biological_gender: {
        type: String,
        required: true,
        enum: ['M', 'F', 'N'],
        comment: "Sexo Biológico do Paciente",
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'E', 'C'],
        comment: "Status do Chamado",
    },
}, { timestamps: true });

const TaskEntity = mongoose.model<ITask>('task', TaskSchema);

export default TaskEntity;
