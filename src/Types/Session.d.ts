type SessionTypeDoctor = 'doctor';

type SessionType = SessionTypeDoctor;

interface Session {
    logged_id: string;
    session_type: SessionType;
}

export interface DoctorSession extends Session {
    name: string;
    session_type: SessionTypeDoctor;
}