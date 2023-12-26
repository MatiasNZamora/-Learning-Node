import { yarg as argv, yarg} from "./config/plugins/args.plugins";
import { ServerApp } from "./presentation/server-app";


(async() => {
    await main();
})();

async function main() {

    // en este caso estamos renombrando las opciones que resivimos de yargs a la opcion "b" la renombramos como "base".
    const {b:base , l:limit, s:showTable,d:fileDestination, n:fileName } = yarg;
    ServerApp.run({base, limit, showTable, fileDestination, fileName});
};








