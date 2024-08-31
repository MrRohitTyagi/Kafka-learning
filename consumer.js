import { kafkaClient } from "./client.js";

const consumer = kafkaClient.consumer({ groupId: "YOUR_CONSUMER_GROUP" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "tp1", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch((e) => console.error("[example/consumer] e.message", e));
