exports.up = async function (knex) {
  await knex.schema.createTable("car-dealer", (table) => {
    table.integer("id").notNull().unique().primary(); //can also use table.increments("id")
    table.text("VIN").notNull().unique();
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("mileage").notNull();
    table.text("transmissionType");
    table.text("titleStatus");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("car-dealer");
};
