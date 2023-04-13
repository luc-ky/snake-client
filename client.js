const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: OLA');
    // conn.write('Move: up');
    // conn.write('Move: down');
    // conn.write('Move: left');
    // conn.write('Move: right');
  });

  return conn;
};

module.exports = {
  connect
};;