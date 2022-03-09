# blocking-event-loop-samples-nodejs

# Bad queue Consumer on main event loop

1. Run implementation of http server and queue consumer on main event loop
   `npm run start:bad-consumer`

2. The result is the event loop will end up blocked and refusing connections or timing out:

![Bad consumer server running](https://github.com/quixote15/blocking-event-loop-samples-nodejs/blob/main/assets/bad-consumer-timeouts.png)

# Good queue Consumer on child process

1. Run implementation of http server with queue consumer a child process
   `npm run start:good-consumer`

2. The result is you dont block the main event loop with consumer processing:

![background consumer server running](https://github.com/quixote15/blocking-event-loop-samples-nodejs/blob/main/assets/good-consumer-timeouts.png)
