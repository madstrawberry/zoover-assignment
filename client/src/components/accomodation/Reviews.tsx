import { useEffect, useState } from "react";
import { Review } from "../../../../server/interfaces";
import { ReviewsResponse } from "../../interfaces/reviews";

export function Reviews() {
  const [isFetchingReviews, setIsFetchingReviews] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);

  async function fetchReviews() {
    setIsFetchingReviews(true);

    const response = await fetch("http://localhost:8080/reviews?limit=10");
    const data: ReviewsResponse = await response.json();

    // Add fake delay to imitate time it takes to fetch the data
    setTimeout(() => {
      setReviews(data.limited);
      setIsFetchingReviews(false);
    }, 400);
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      {isFetchingReviews && <>Is fetching reviews...</>}

      {!isFetchingReviews &&
        reviews.map((review) => (
          <p key={review.id}>{review.titles[review.locale]}</p>
        ))}
    </>
  );
}
