import { ChangeEvent, useEffect, useState } from "react";
import { Review } from "../../../../server/interfaces";
import { ReviewsApi } from "../../ReviewsApi";

export function Reviews() {
  const [isFetchingReviews, setIsFetchingReviews] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);

  const [filterState, setFilterState] =
    useState<ReviewsApi.ReviewFilterOptions>({
      filterBy: "",
      sortBy: "",
      limit: 10,
      start: 1,
    });

  const fetchReviews = async (
    currentFilterState: ReviewsApi.ReviewFilterOptions
  ) => {
    setIsFetchingReviews(true);

    const data = await ReviewsApi.getReviews(currentFilterState);

    setReviews(data);
    setIsFetchingReviews(false);
  };

  const onSelectFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterState((filterState) => ({
      ...filterState,
      filterBy: e.target.value,
    }));
  };

  useEffect(() => {
    fetchReviews(filterState);
  }, [filterState]);

  return (
    <>
      <div className="bg-slate-100 border-y border-slate-200 mt-5">
        <div className="max-w-5xl px-8 py-3 mx-auto">
          Filter reviews by:{" "}
          <select
            onChange={onSelectFilter}
            name="travelledWith"
            id="travelledWith"
          >
            <option value="">ALL</option>
            <option value="FAMILY">FAMILY</option>
            <option value="FRIENDS">FRIENDS</option>
            <option value="SINGLE">SINGLE</option>
            <option value="COUPLE">COUPLE</option>
            <option value="OTHER">OTHER</option>
          </select>
        </div>
      </div>

      <div className="max-w-5xl px-8 mt-5 mx-auto">
        {isFetchingReviews && <>Is fetching reviews...</>}

        {!isFetchingReviews &&
          reviews.map((review) => (
            <p key={review.id}>{review.titles[review.locale]}</p>
          ))}
      </div>
    </>
  );
}
