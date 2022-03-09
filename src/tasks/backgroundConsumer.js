import { setTimeout } from "timers/promises";
const processMessage = async () => {
  for (let i = 0; i < 1e9; i++) {
    await setTimeout(100);
    console.log("processou mensagem da fila");
  }
};

const pollQueueMessages = () => Array.from(Array(10).keys());

const consumeQueueMessages = async () => {
  const messages = pollQueueMessages();
  await processMessage(messages);
};

consumeQueueMessages();

process.on("message", (msg) => console.log("child messge received ", msg));
