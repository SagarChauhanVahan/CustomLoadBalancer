const express = require('express');
const app = express();
const {servers} = require('./server_information');
const underscore = require('underscore');
const axios = require('axios');

app.listen(80, () => {
    // setup all the proxy servers
    console.log(`Listening to port 80.`);
});

app.get('*', async (req, res) => {
    
    // select server and forward the request.
    selectedServer = underscore.max(servers, (server) => server.currentWeight);

    // resetting the server weight if it reaches less than zero
    selectedServer.currentWeight--;
    if (selectedServer.currentWeight <0) {
        // reset weights
        for (let i=0;i<servers.length;i++) {
            servers[i].currentWeight = servers[i].actualWeight;
        }
    }

    requestUrl = 'http://' + selectedServer.serverName + req.originalUrl;

    console.log('*********** New Request in Load Balancer *************');
    console.log(`Request URL is ${requestUrl}`);
    const resp = await axios.get(requestUrl);
    console.log('*********** Request served *************');

    res.send(resp.data);
});

