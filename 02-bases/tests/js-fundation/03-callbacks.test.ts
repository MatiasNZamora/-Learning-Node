import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('js-fundation/03-callbacks.ts', () => {

    test('GetUserById should an error if user does not exist', (done) => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            done(); // se manda a llamar luego que se emita el valor de resultado para el scoup de la funcion
        });
    });

    test('GetUserById should retorun jhon Doe', (done) => {
        const id = 1;
        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toStrictEqual(    
                {
                    id: 1,
                    name: 'Jone Doe'
                }
            );

            done(); // se manda a llamar luego que se emita el valor de resultado para el scoup de la funcion
        });
    });
    
}); 