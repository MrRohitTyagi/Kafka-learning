import { Kafka, logLevel } from "kafkajs";
import { configDotenv } from "dotenv";
configDotenv("./.env");

const { KAFKA_BROKER_ONE, KAFKA_PASSWORD, KAFKA_USERNAME } = process.env;
export const kafkaClient = new Kafka({
  brokers: [KAFKA_BROKER_ONE],
  ssl: true,
  sasl: {
    mechanism: "scram-sha-256",
    username: KAFKA_USERNAME,
    password: KAFKA_PASSWORD,
  },
  logLevel: logLevel.ERROR,
});
