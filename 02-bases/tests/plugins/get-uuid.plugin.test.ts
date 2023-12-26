import { getUuidv4 } from "../../src/plugins";

describe('plugins/get-uuid.plugins.ts', () => {
    test('getUUID should return a UUID', () => {
        const uuid = getUuidv4();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
    });
});