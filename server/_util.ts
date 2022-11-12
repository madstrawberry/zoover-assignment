import { Review } from "./interfaces";

function getAverageRatings(reviews: Review[]) {
  let generalCount = 0;

  let items: Record<string, number> = {};
  let itemsCounts: Record<string, number> = {};

  let aspects = Object.keys(reviews[0].ratings.aspects);

  reviews.forEach((review) => {
    let weight = getReviewWeight(review);
    generalCount += review.ratings.general.general * weight;

    aspects.forEach((a) => {
      items[a] = items[a] || 0;

      if (review.ratings.aspects[a]) {
        items[a] += review.ratings.aspects[a] * weight;
        itemsCounts[a] = itemsCounts[a] || 0;
        itemsCounts[a]++;
      }
    });
  });

  let generalAvg = (generalCount / reviews.length).toFixed(1);

  const formattedItemsCounts: Record<string, string> = {};

  Object.keys(itemsCounts).map((item) => {
    formattedItemsCounts[item] = (items[item] / itemsCounts[item]).toFixed(1);
  });

  return { generalAvg, aspecsAvg: formattedItemsCounts };
}

function getAverageTravelledWith(reviews: Review[]) {
  let categories: Record<string, number> = {};
  let categoriesCount: Record<string, number> = {};

  reviews.forEach((item) => {
    let category = item.traveledWith;
    categoriesCount[category] = categoriesCount[category] || 0;
    categoriesCount[category]++;
  });

  Object.keys(categoriesCount).forEach((item) => {
    categories[item] = (categoriesCount[item] * 10) / reviews.length;
  });

  return categories;
}

function getReviewWeight(review: Review) {
  // TODO: return the right calculations here instead of 1
  // according to the provided info in README.md file
  return 1;
}

export default {
  getAverageRatings,
  getAverageTravelledWith,
};
