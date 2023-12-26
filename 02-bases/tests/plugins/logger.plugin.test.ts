// import { buildLogger, logger as winstonLogger} from "../../src/plugins";

describe('plugins/logger.plugins.ts', () => {
    test('buildLogger should retunr a function logger', () => {
        // const logger = buildLogger('test');
        // expect(typeof logger.log).toBe('function');
        // expect(typeof logger.error).toBe('function');
    });

    // test('logger.log should log a message', () => {
    //     const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
    //     const message = 'test logger';
    //     const service = 'test service';
    //     const logger = buildLogger(service);

    //     logger.log(message);

    //     expect(winstonLoggerMock).toHaveBeenLastCalledWith(
    //         'info',
    //         expect.objectContaining({
    //             level:'info',
    //             message,
    //             service
    //         })
    //     );
    // });
});