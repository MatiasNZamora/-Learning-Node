import { buildMakePerson } from "../../src/js-foundation/05-factory";


describe('js-foundation/05-factory', () => {

    const getUuidv4 = () => '1234';
    const getAge = () => 34;


    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getUuidv4, getAge});
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({getUuidv4, getAge});
        const johnDoe = makePerson({ name:'Jhon Doe', birthdate: '1993-03-02' });
        // console.log(johnDoe);

        expect(johnDoe).toEqual({
            id:'1234',
            name:'Jhon Doe',
            birthdate: '1993-03-02',
            age: 34
        });
    });
});