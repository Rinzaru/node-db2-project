const express = require("express");
const router = express.Router();

const db = require("../../data/config");

router.get("/", async (req, res, next) => {
  try {
    const cars = await db.select("*").from("car-dealer");
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const [cars] = await db
      .select("*")
      .from("car-dealer")
      .where("id", req.params.id)
      .limit(1);

    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const cars = await db
      .insert({
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmissionType: req.body.transmissionType,
        titleStatus: req.body.titleStatus,
      })
      .into("car-dealer");

    res.status(201).json(cars);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
