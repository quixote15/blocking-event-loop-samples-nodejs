import { setTimeout } from "timers/promises";

import { createServer } from "http";

// dummy endpoint always responds success
const handler = async (req, res) => {
  res.end("Nova requisição processada.");
};

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

// init http server to receive client requests
createServer(handler).listen(3001, () => {
  console.log(`Processo ${process.pid} listeneing requests at port 3001`);
});

// initialize queue consumer loop/polling
consumeQueueMessages();
