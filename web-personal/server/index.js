const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.port || 3977;
const { API_VERSION, SERVER_IP, DB_PORT } = require("./config");

mongoose.set("useFindAndModify", false);

mongoose.connect(
  `mongodb://${SERVER_IP}:${DB_PORT}/cristianrosarnao`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexión a la base de datos es correcta.");

      app.listen(port, () => {
        console.log("########################");
        console.log("####### API REST #######");
        console.log("########################");
        console.log(`http://${SERVER_IP}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);
