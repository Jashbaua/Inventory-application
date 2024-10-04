const { Pool } = require("pg");
require("dotenv").config();

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`
});