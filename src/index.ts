import fs from 'fs';
import path from 'path';
import { InfluxDB, Point } from '@influxdata/influxdb-client';
import { OpenAPIClientAxios } from 'openapi-client-axios';
import type { Client as FroniusClient } from './api/solarApiv1.d.ts';

const froniusUrl: string = process.env.FRONIUS_URL || 'http://localhost:1234';

const influxUrl: string = process.env.INFLUXDB_URL || 'http://localhost:8086';
const influxToken: string = process.env.INFLUXDB_TOKEN || 'my-test-token';
const influxOrg: string = process.env.INFLUXDB_ORG || 'my-org';
const influxBucket: string = process.env.INFLUXDB_BUCKET || 'my-bucket';

const interval: number = (Number(process.env.INTERVAL) / 1000) || 5000;

const influxDB = new InfluxDB({ url: influxUrl, token: influxToken });
const influxWriteApi = influxDB.getWriteApi(influxOrg, influxBucket);

const definition: string = JSON.parse(fs.readFileSync('api/solarApiv1.json', 'utf-8'));
const froniusApi = new OpenAPIClientAxios({ definition: definition, withServer: { url: froniusUrl } });
froniusApi.init();

test();

async function test(): Promise<void> {
    const client = await froniusApi.getClient<FroniusClient>();
    const response = await client.GetInverterInfo();
}
