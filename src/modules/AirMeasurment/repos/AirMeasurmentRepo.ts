import { Prisma, PrismaClient } from '@prisma/client';
import prisma from '../../../database/client'
import { FindLatestParams } from '../interface/IAirMeasurment';

export class AirMeasurmentRepo {
    constructor(private readonly client: PrismaClient) {}

    async findLatest (query: FindLatestParams) {
        const result =  await this.client.airMeasurment.findFirst({
            where: query,
            orderBy: { airQualityMeasuredAt: 'desc' }
        })

        return result
    }

    async createOne (args: Prisma.AirMeasurmentCreateInput) {
        return await this.client.airMeasurment.create({data: args})
    }
}

export const airMeasurmentRepo = new AirMeasurmentRepo(prisma)