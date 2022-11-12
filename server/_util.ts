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

export function getReviewWeight(review: Review) {
  // When the review is older than 5 years its weight value defaults to 0.5.
  // Otherwise it equals: 1 - (current_year - year_of_review)*0.1

  const currentTimestamp = Date.now();
  const reviewTimestamp = review.entryDate;

  const diffInYears = convertMsToYears(currentTimestamp - reviewTimestamp);

  if (diffInYears > 5) {
    return 0.5;
  }

  const currentYear = new Date(currentTimestamp).getFullYear();
  const reviewYear = new Date(reviewTimestamp).getFullYear();

  return 1 - (currentYear - reviewYear) * 0.1;
}

function convertMsToYears(ms: number) {
  return ms / 1000 / 60 / 60 / 24 / 365.25;
}

export default {
  getAverageRatings,
  getAverageTravelledWith,
};
