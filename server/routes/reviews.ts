import _ from "underscore";
import express from "express";
import util from "../_util";

const reviews = require("../api/reviews.json");

const router = express.Router();

router.get("/", function (req, res) {
  let { start = 1, limit, filterBy, sortBy = "entryDate" } = req.query;
  let data = _.sortBy(reviews, sortBy).reverse(); // reverse to sort desc
  let filtered = data.filter((review) =>
    filterBy ? review.traveledWith === filterBy : true
  );
  let paginated = filtered.slice(
    parseInt(start as string) - 1,
    parseInt(start as string) - 1 + parseInt(limit as string)
  );

  res.json({ all: data, filtered: filtered, limited: paginated });
});

router.get("/average", function (req, res) {
  let { generalAvg, aspecsAvg } = util.getAverageRatings(reviews);
  let traveledWithAvg = util.getAverageTravelledWith(reviews);
  res.json({ generalAvg, aspecsAvg, traveledWithAvg });
});

export default router;
