import { createServer } from "http";
import { fork } from "child_process";

// dummy endpoint always responds success
const handler = async (req, res) => {
  res.end("Nova requisição processada.");
};

// init http server to receive client requests
createServer(handler).listen(3001, () => {
  console.log(`Processo ${process.pid} listeneing requests at port 3001`);
});

const startBackgroundQueueConsumer = () => {
  const backgroundTaskFile = "./src/tasks/backgroundConsumer.js";
  const child = fork(backgroundTaskFile);
  const processes = new Map();
  child.on("exit", () => {
    console.log(`process ${child.pid} exited`);
    processes.delete(child.pid);
  });

  child.on("error", (error) => {
    console.log(`process ${child.pid} has an error`, error);
    process.exit(1);
  });

  child.on("message", (msg) => {
    console.log("received from child ", msg);
  });

  processes.set(child.pid, child);
};

// initialize queue consumer loop/polling
startBackgroundQueueConsumer();
