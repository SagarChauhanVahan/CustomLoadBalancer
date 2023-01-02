const servers = [
  { id: 0, serverName: "localhost:3000", currentWeight: 3, actualWeight: 3 },
  { id: 1, serverName: "localhost:3001", currentWeight: 1, actualWeight: 1 },
];

// logic to implement heartbeat and server removal on failure
// try-catch on load balancing server axios call,
// if the call is failed, in catch block get the start time and #failure no.
// everytime in catch block increase the #failure no. and set new end time
// on every call before selecting server,
// check if failure no within an estimated time is > #
// if yes then remove that server from array

// logic to reset the failure counter and start time
// if start time and end time is >= est. time and error # is less than est. #
// reset the error timer and counter

module.exports = { servers };
