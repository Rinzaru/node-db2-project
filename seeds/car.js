exports.seed = async function (knex) {
  await knex("car-dealer").insert([
    {
      vin: "f8e4d65a98d47d85s",
      make: "Toyota",
      model: "kia forte",
      mileage: 500,
      transmissionType: "Automatic",
      titleStatus: "resold",
    },
    {
      vin: "w8e4d65a98d47d85s",
      make: "Toyota",
      model: "vroom",
      mileage: 500,
      transmissionType: "Automatic",
      titleStatus: "resold",
    },
    {
      vin: "qw8e4d65a98d47d85s",
      make: "Toyota",
      model: "fast boi",
      mileage: 500,
      transmissionType: "Automatic",
      titleStatus: "resold",
    },
    {
      vin: "qwe4d65a98d47d85s",
      make: "Toyota",
      model: "kachoo",
      mileage: 500,
      transmissionType: "Automatic",
      titleStatus: "resold",
    },
  ]);
};
