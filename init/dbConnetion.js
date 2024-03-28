const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.connection_string);
    console.log(connect.connection.host, connect.connection.name);
  } catch (err) {
    console.log(err);
    process.emit(1);
  }
};
module.exports = connectdb
