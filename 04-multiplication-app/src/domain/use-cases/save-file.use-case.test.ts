import fs from 'fs';
import { SaveFile } from './save-file.use-case';


describe('saveFileuseCase', () => {
    
    const customOptions = {
        fileContent: 'Custom content',
        fileDestination: 'custom-outputs',
        fileName:'custom-table-name'
    };

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    // pasos de ciclos de vida     
    afterEach(() => {
        const outputFolderExists = fs.existsSync('otputs');
        if(outputFolderExists) fs.rmSync('outputs', { recursive: true });

        const customOutputFolderExists = fs.existsSync(customOptions.fileDestination);
        if(outputFolderExists) fs.rmSync(customOptions.fileDestination, { recursive: true });
    });

    test('should save file with defaul values ', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt'
        const options = { fileContent: 'test content'};

        const result = saveFile.execute(options);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'});
        
        // asserciones
        expect(result).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });

    test('should save files with custom values ', () => {

        const saveFile = new SaveFile();

        const result = saveFile.execute(customOptions);
        const fileExists = fs.existsSync(customFilePath);
        const fileContent = fs.readFileSync(customFilePath, {encoding: 'utf-8'});

        // asserciones
        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);
    }); 

    test('should return false if directory could not be created', () => {
        const savefile =  new SaveFile();
        const mkdirSpy = jest.spyOn(fs,'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom error message from testing'); }
        );

        const result = savefile.execute(customOptions);
        expect( result ).toBe(false);

        mkdirSpy.mockRestore();
    });

    test('should return false if file cloud not be created', () => {
        const savefile =  new SaveFile();
        const writeFileSpy = jest.spyOn(fs,'writeFileSync').mockImplementation(
            () => { throw new Error('This is a custom error message from testing'); }
        );

        const result = savefile.execute({fileContent: 'Hola'});
        expect( result ).toBe(false);

        writeFileSpy.mockRestore();
    });

});