import { LogEntity, LogSeverityLevel  } from "../entities/log.entities";

export abstract class  LogRepository {
    abstract saveLog( log:LogEntity ): Promise<void>;
    abstract saveLog( severtyLevel:LogSeverityLevel ): Promise<void>;
};