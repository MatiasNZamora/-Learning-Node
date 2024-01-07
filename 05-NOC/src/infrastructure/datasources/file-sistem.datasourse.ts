import { LogDatasource } from "../../domain/datasorces/log.datasourse";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entities";
import fs from 'fs'

export class FileSistemDatasourse  implements LogDatasource {
    private readonly LogPath = 'logs/';
    private readonly allLogsPath    = 'logs/logs-low.log';
    private readonly mediumLogsPath = 'logs/logs-meidum.log';
    private readonly highLogsPath   = 'logs/logs-high.log';
    
    constructor(){
        this.createLogsFiles();
    };
    
    private createLogsFiles = () => {
        if(fs.existsSync(this.LogPath)){
            fs.mkdirSync(this.LogPath);
        };

        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach( path => {
            if(fs.existsSync(path)) return;
            fs.writeFileSync(path, '');
        });

    };
    
    saveLog(log: LogEntity): Promise<void>;
    saveLog(severtyLevel: LogSeverityLevel): Promise<void>;
    saveLog(severtyLevel: unknown): Promise<void> {
        throw new Error("Method not implemented.");
    }
};

// 124