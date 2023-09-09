import { Prisma } from "@prisma/client";
import { differenceInMinutes } from "date-fns";
import { z } from "zod";
import { iqairService, IQAIRService } from "../../IQAIR/services/IQAIRServies";
import { FindLatestParams } from "../interface/IAirMeasurment";
import { AirMeasurmentRepo, airMeasurmentRepo } from "../repos/AirMeasurmentRepo";

export class AirMeasurmentService {
    constructor(
        private readonly repo: AirMeasurmentRepo, 
        private readonly iqairService: IQAIRService
        ) {}

    readonly getAirQualitySchema = z
        .object({
          lon: z.string(),
          lat: z.string(),
        })
        .required();

    isExpired(date: Date) {
        const timeDifference = differenceInMinutes(new Date(), date);
        return timeDifference > 5;
    }

    async findLatest (query: FindLatestParams) {
        return await this.repo.findLatest(query)
    }

    async findLatestAndUpdateIfExpired (query: FindLatestParams) {
        const measurment = await this.findLatest(query)
        if (!measurment || this.isExpired(measurment.airQualityMeasuredAt)) {
            const response = await this.iqairService.getAirQuality(query)
            const newData = response.data
            await this.createOne({
                lon: query.lon,
                lat: query.lat,
                city: newData.city,
                state: newData.state,
                country: newData.country,
                airQualityMeasuredAt: newData.current?.pollution?.ts,
                weatherMeasuredAt: newData.current?.weather?.ts,
                airPressure: newData.current?.weather?.pr?.toString(),
                temperature: newData.current?.weather?.tp?.toString(),
                humidity: newData.current?.weather?.hu?.toString(),
                windSpeed: newData.current?.weather?.ws?.toString(),
                windDirection: newData.current?.weather?.wd?.toString(),
                airQualityIndexUS: newData.current?.pollution?.aqius?.toString(),
                airQualityIndexChina: newData.current?.pollution?.aqicn?.toString(),
                mainPollutantUS: newData.current?.pollution?.mainus,
                mainPollutantChina: newData.current?.pollution?.maincn,
            })

            return {
              Pollution: newData.current?.pollution,
            }
        }

        return {
          Pollution: {
            ts: measurment.airQualityMeasuredAt,
            aqius: measurment.airQualityIndexUS,
            mainus: measurment.mainPollutantUS,
            aqicn: measurment.airQualityIndexChina,
            maincn: measurment.mainPollutantChina,
          }
        }
    }

    async createOne (args: Prisma.AirMeasurmentCreateInput) {
        return await this.repo.createOne(args)
    }
}

export const airMeasurmentService = new AirMeasurmentService(airMeasurmentRepo, iqairService)