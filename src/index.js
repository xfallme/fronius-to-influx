const fs = require('fs');
const path = require('path');

const { InfluxDB, Point } = require('@influxdata/influxdb-client');
const OpenAPIClientAxios = require('openapi-client-axios').default;

const froniusUrl = process.env.FRONIUS_URL || 'http://localhost:1234';

const influxUrl = process.env.INFLUXDB_URL || 'http://localhost:8086';
const influxToken = process.env.INFLUXDB_TOKEN || 'my-test-token';
const influxOrg = process.env.INFLUXDB_ORG || 'my-org';
const influxBucket = process.env.INFLUXDB_BUCKET || 'my-bucket';

const interval = (process.env.INTERVAL/1000) || 5000;

const influxDB = new InfluxDB({ url: influxUrl, token: influxToken });
const influxWriteApi = influxDB.getWriteApi(influxOrg, influxBucket);

const definition = JSON.parse(fs.readFileSync(path.join(__dirname, '../api/solarApiv1.json')));
const froniusApi = new OpenAPIClientAxios({ definition, withServer: { url: froniusUrl } });
froniusApi.init();

test();

async function test() {
    const client = await froniusApi.getClient();
    test = await client.GetInverterRealtimeData();
    console.log(client);
    console.log(test.data.Body.Data);
}