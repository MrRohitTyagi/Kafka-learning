import { kafkaClient } from "./client.js";

const producer = kafkaClient.producer({ allowAutoTopicCreation: true });

const message = { a: 1, b: 23432, c: "fdsfds" };

const run = async () => {
  await producer.connect();

  await producer.send({
    topic: "tp1",
    messages: [{ value: JSON.stringify(message) }],
  });

  console.log("Message sent successfully");
  await producer.disconnect();
};

run().catch((e) => console.error("[example/producer] e.message", e));
