import { kafkaClient } from "./client.js";

const admin = kafkaClient.admin();

async function run() {
  //   await admin.createTopics({
  //     topics: [
  //       {
  //         topic: "tp2",
  //       },
  //     ],
  //   });

  //   await admin.deleteTopics({ topics: ["tp2"] });

  console.log(await admin.listTopics());
}

run().catch((err) => console.log("err", err));
