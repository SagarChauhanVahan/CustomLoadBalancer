# CustomLoadBalancer

Tried mimicking nginx.

To execute:

1) Run application servers on different ports.
- E.g:
server1: PORT=3000 node application_server.js
server2: PORT=3001 node application_server.js

2) Run load balancing server. (Port 80)

3) Fire requests to port 80 and check the weighted RR implementation on different active servers.
