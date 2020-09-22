module.exports = {
  client: "sqlite3",
  nuseNullAsDefault: true, //required for SQLite
  connection: {
    filename: "./data/car-dealer.db3",
  },
};
