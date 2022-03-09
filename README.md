# blocking-event-loop-samples-nodejs

# Bad queue Consumer on main event loop

1. Run implementation of http server and queue consumer on main event loop
   `npm run start:bad-consumer`

2. The result is the event loop will end up blocked and refusing connections or timing out:

# Good queue Consumer on child process

1. Run implementation of http server with queue consumer a child process
   `npm run start:good-consumer`

2. The result is you dont block the main event loop with consumer processing:
