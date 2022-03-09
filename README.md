# blocking-event-loop-samples-nodejs

From Node docs & community we know:

Node.js uses a small number of threads to handle many clients. In Node.js there are two types of threads: one Event Loop (aka the main loop, main thread, event thread, etc.), and a pool of k Workers in a Worker Pool (aka the threadpool).

If a thread is taking a long time to execute a callback (Event Loop) or a task (Worker), then the thread is blocked and may not respond to futher requests.

- You should make sure you never block the Event Loop.
- Also JavaScript callbacks should complete quickly

A common use case in production application that one might have is consuming messages from a queue (for instance: aws SQS). This project contains results and implementation of bad and good consumer for that use case.

### Bad queue Consumer on main event loop

1. Run implementation of http server and queue consumer on main event loop
   `npm run start:bad-consumer`

2. The result is the event loop will end up blocked and refusing connections or timing out:

![Bad consumer server running](https://github.com/quixote15/blocking-event-loop-samples-nodejs/blob/main/assets/bad-consumer-timeouts.png)

### Good queue Consumer on child process

1. Run implementation of http server with queue consumer a child process
   `npm run start:good-consumer`

2. The result is you dont block the main event loop with consumer processing:

![background consumer server running](https://github.com/quixote15/blocking-event-loop-samples-nodejs/blob/main/assets/good-consumer.png)
