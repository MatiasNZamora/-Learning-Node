import fs from 'fs';

export interface SaveFileUserCase {
    execute: ( options: Options) => boolean;
};

export interface Options { 
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
};

export class SaveFile implements SaveFileUserCase {
     // Repositori: StorageRepository
    constructor() { }
    execute({
        fileContent, 
        fileDestination = 'outputs', 
        fileName = 'table.txt'
    }: Options):boolean {
        try {
            fs.mkdirSync(fileDestination, { recursive:true });
            fs.writeFileSync(`${fileDestination}/${ fileName }`, fileContent);
        return true
        } catch (error) {
            // console.error(error);
            return false
        };
    };
}; 