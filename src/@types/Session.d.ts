type SessionTypeDoctor = 'doctor';

type SessionType = SessionTypeDoctor;

export interface BaseSession {
    logged_id: string;
    session_type: SessionType;
}

export interface DoctorSession extends BaseSession {
    name: string;
    session_type: SessionTypeDoctor;
}