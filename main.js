require("dotenv").config();
var express = require("express");
var ParseServer = require("parse-server").ParseServer;
var ParseDashboard = require("parse-dashboard");
var parse = express();
const port = process.env.PORT;

/** Parse server configuration */
var api = new ParseServer({
  appName: "arcade_server",
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverURL: process.env.SERVER_URL,
  databaseURI: process.env.DATABASE_URI,
  cloud: "./cloud/main",
  allowClientClassCreation: false,
});
/** Dashboard configuration */
var dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: process.env.SERVER_URL,
      appId: process.env.APP_ID,
      masterKey: process.env.MASTER_KEY,
      appName: "arcade_server",
    },
  ],
});

parse.use("/parse", api);
parse.use("/dashboard", dashboard);
parse.listen(process.env.PORT, function() {
  console.log("parse-server running on port " + port + ".");
});
