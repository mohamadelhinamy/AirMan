export interface IConfig {
    iqairApiKey?: string;
    iqairBaseUrl?: string
    baseUrl?: string
}

export const config: IConfig = {
    iqairApiKey: process.env.IQAIR_API_KEY,
    iqairBaseUrl: process.env.IQAIR_BASE_URL,
    baseUrl: process.env.BASE_URL
};
