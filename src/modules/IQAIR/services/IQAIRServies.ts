import { AirQualityQuery, IQAIRResponse } from "../interface/IIQAIRClient";
import { IQAIR, iqairClient } from "./IQAIR";

export class IQAIRService {
    public constructor(
        private iqairClient: IQAIR
    ) {}

    async getAirQuality(query: AirQualityQuery): Promise<IQAIRResponse> {
        return await this.iqairClient.getAirQuality(query)
    }
}

export const iqairService = new IQAIRService(iqairClient)