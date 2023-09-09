require('dotenv').config();
import app from './app';

const port = process.env?.PORT ?? 3000;

import cron from 'node-cron';
import { config } from './config';
import { AirQualityQuery } from './modules/IQAIR/interface/IIQAIRClient';
import { httpClient } from './modules/HttpClient/HttpClient';


// coordinates for Paris
const params: AirQualityQuery = {
  lon: '2.352222',
  lat: '48.856613'
}

// Define the URL of the endpoint you want to trigger
const endpointUrl: string = `${config.baseUrl}/air-quality`; // Update with the actual URL

// Schedule the cron job to run every minute
cron.schedule('* * * * *', async () => {
  try {
    console.log('Triggering the endpoint...');
    const response = await httpClient.get(endpointUrl, { params });
    console.log('Endpoint response:', response.data);
  } catch (error) {
    console.error('Error triggering the endpoint:', error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
