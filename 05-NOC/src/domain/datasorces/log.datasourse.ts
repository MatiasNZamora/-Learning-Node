import { LogEntity, LogSeverityLevel  } from "../entities/log.entities";

export abstract class  LogDatasource {
    abstract saveLog( log:LogEntity ): Promise<void>;
    abstract saveLog( severtyLevel:LogSeverityLevel ): Promise<void>;
};