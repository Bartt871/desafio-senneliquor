import { BaseSession } from './Session';

import 'express-session';

declare module 'express-session' {
    interface SessionData extends BaseSession {
    }
}
