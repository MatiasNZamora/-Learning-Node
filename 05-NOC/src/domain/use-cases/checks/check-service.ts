
interface CheckServiceUseCase {
    execute(url:string):Promise<boolean>;
    // el metodo execute recibe una url de tipo string y devuelve una promesa de tipo boleano.
}

type SuccessCallBack = () => void;
type ErrorCallBack = (error:string) => void;

// caso de uso
export class CheckService implements CheckServiceUseCase {
    
    constructor(
        private readonly successCallBack:SuccessCallBack,
        private readonly errorCallBack:ErrorCallBack
    ){}
    
    public async execute(url:string) : Promise<boolean> {
        
        try {
            const req = await fetch(url);
            
            if(!req.ok){
                throw new Error(`Error on check service ${ url }`);
            };

            this.successCallBack();
            // console.log(`${url} is OK`)
            return true;
            
        } catch (error) {
            
            this.errorCallBack(`${ error }`);
            return false;
        }
    };  
};