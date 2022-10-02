require('dotenv').config();

const APP_NAME = process.env.APP_NAME;
const APP_PASS = process.env.APP_PASS;
const CLUSTER = process.env.CLUSTER;

export const URI = `mongodb+srv://${APP_NAME}:${APP_PASS}@${CLUSTER}/?retryWrites=true&w=majority`;