import { characters } from "../../src/js-foundation/02-destructuring";

describe('02-foundation/02-desestructuring.ts', () => {
    
    test('charactes should containt Flash, Superman', () => {
        // Arrage 
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    });

    test('first caracter should Flash, and second Superman', () => {
        const [flash, superman] = characters;

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');


    })



});