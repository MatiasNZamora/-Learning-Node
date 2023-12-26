// console.log( process.env);
const { PUBLIC, TEMP } = process.env;
// console.table( { PUBLIC, TEMP } )


export const characters = ['Flash','Superman','Green Lantern', 'Batman'];

const [, , , Batman] = characters;
// console.log( Batman );
