export type AirQualityQuery = {
    lon?: string
    lat?: string
}

/**
 * This service describes an interface to access data from the IQAIR API.
 */
export interface IIQAIRClient {
    /**
     * The api key.
     */
    iqairApiKey?: string;

    /**
     * The base URL for the iqair API.
     */
    baseUrl?: string;

     //fetch air quality for some region using its coordinates.

    getAirQuality(query: AirQualityQuery): Promise<IQAIRResponse>;
}

type IQAIRResponseData = {
    city: string
    country: string
    state: string
    location: {
        type: string
        coordinates: number[]
    }
    current: {
        pollution: {
            ts: Date
            aqius: number
            mainus: string
            aqicn: number
            maincn: string
        }
        weather: {
            ts: Date
            tp: number
            pr:number
            hu:number
            ws: number
            wd:number
            ic:string
        }
    }
}

export type IQAIRResponse = {
    status: string
    data: IQAIRResponseData
}
