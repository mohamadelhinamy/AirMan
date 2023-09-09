import { ILogger } from "../interface/ILogger";

export class Logger implements ILogger {
    public constructor() {}

    public log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
    public warn(message: string): void {
        console.warn(`[WARN]: ${message}`);
    }
    public info(message: string): void {
        console.info(`[INFO]: ${message}`);
    }
    public error(message: string): void {
        console.error(`[ERROR]: ${message}`);
    }
}

export const logger = new Logger()
