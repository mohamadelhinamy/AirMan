-- CreateTable
CREATE TABLE "AirMeasurment" (
    "id" UUID NOT NULL,
    "lon" TEXT,
    "lat" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "airQualityIndexUS" TEXT,
    "airQualityIndexChina" TEXT,
    "mainPollutantUS" TEXT,
    "mainPollutantChina" TEXT,
    "temperature" TEXT,
    "airPressure" TEXT,
    "humidity" TEXT,
    "windSpeed" TEXT,
    "windDirection" TEXT,
    "airQualityMeasuredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weatherMeasuredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AirMeasurment_pkey" PRIMARY KEY ("id")
);
