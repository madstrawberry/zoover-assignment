import { AverageRatingsResponse } from "./interfaces/ratings";
import { ReviewsResponse } from "./interfaces/reviews";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export namespace ReviewsApi {
  export async function getReviewAverages() {
    const response = await fetch("http://localhost:8080/reviews/average");
    const data: AverageRatingsResponse = await response.json();

    // Add fake delay to imitate time it takes to fetch the data
    await delay(200);

    return data;
  }

  export type ReviewFilterOptions = {
    start?: number;
    limit?: number;
    filterBy?: string;
    sortBy?: string;
  };

  export async function getReviews({
    limit = 10,
    start = 1,
    filterBy,
    sortBy,
  }: ReviewFilterOptions) {
    const filterByUrl = filterBy ? `&filterBy=${filterBy}` : "";
    const sortByUrl = sortBy ? `&sortBy=${sortBy}` : "";

    const response = await fetch(
      `http://localhost:8080/reviews?limit=${limit}&start=${start}${filterByUrl}${sortByUrl}`
    );
    const data: ReviewsResponse = await response.json();

    // Add fake delay to imitate time it takes to fetch the data
    await delay(400);

    return { reviews: data.limited, total: data.filtered.length };
  }
}
