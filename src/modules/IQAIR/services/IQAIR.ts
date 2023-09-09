import {
    IIQAIRClient,
    AirQualityQuery,
    IQAIRResponse,
} from "../interface/IIQAIRClient";
import "reflect-metadata";
import {
    IHttpClient,
} from "../../HttpClient/interface/IHttpClient";
import { ILogger } from "../../Logger/interface/ILogger";
import { config } from "../../../config";
import { httpClient } from "../../HttpClient/HttpClient";
import { logger } from "../../Logger/services/Logger";

export class IQAIR implements IIQAIRClient {
    public constructor(
        private httpClient: IHttpClient,
        private logger: ILogger
    ) {}

    public async getAirQuality(query: AirQualityQuery): Promise<IQAIRResponse> {
        this.logger.info(JSON.stringify({
            params: {
                key: config.iqairApiKey ?? '',
                ...query,
            },
        }));
        try {
            const response = await this.httpClient.get(
                `${config.iqairBaseUrl}/nearest_city`,
                {
                    params: {
                        key: config.iqairApiKey ?? '',
                        ...query,
                    },
                }
            );
            return response.data
        } catch (err: any) {
            this.logger.error(`${err} error getting air quality`)
            throw new Error("Error getting air quality");
        }
    }
}

export const iqairClient = new IQAIR(httpClient, logger)
