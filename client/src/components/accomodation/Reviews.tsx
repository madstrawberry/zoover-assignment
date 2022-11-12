import { useEffect, useState } from "react";
import { Review } from "../../../../server/interfaces";
import { ReviewsApi } from "../../ReviewsApi";

export function Reviews() {
  const [isFetchingReviews, setIsFetchingReviews] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);

  async function fetchReviews() {
    setIsFetchingReviews(true);

    const data = await ReviewsApi.getReviews({ limit: 10 });

    setReviews(data);
    setIsFetchingReviews(false);
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
