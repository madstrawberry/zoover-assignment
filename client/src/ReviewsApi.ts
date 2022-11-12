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

  type Options = {
    limit?: number;
  };

  export async function getReviews({ limit = 10 }: Options) {
    const response = await fetch(
      `http://localhost:8080/reviews?limit=${limit}`
    );
    const data: ReviewsResponse = await response.json();

    // Add fake delay to imitate time it takes to fetch the data
    await delay(400);

    return data.limited;
  }
}
