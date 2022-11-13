import { ChangeEvent, useEffect, useState } from "react";
import { Review } from "../../../../server/interfaces";
import { ReviewsApi } from "../../ReviewsApi";

const filters = ["", "FAMILY", "FRIENDS", "SINGLE", "COUPLE", "OTHER"];
const sorting = [
  ["Review Date", "entryDate"],
  ["Trip Date", "travelDate"],
];

export function Reviews() {
  const [isFetchingReviews, setIsFetchingReviews] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);

  const [filterState, setFilterState] =
    useState<ReviewsApi.ReviewFilterOptions>({
      filterBy: "",
      sortBy: "entryDate",
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

  const onSortBy = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterState((filterState) => ({
      ...filterState,
      sortBy: e.target.value,
    }));
  };

  useEffect(() => {
    fetchReviews(filterState);
  }, [filterState]);

  return (
    <>
      <div className="bg-slate-100 border-y border-slate-200 mt-5">
        <div className="max-w-5xl px-8 py-3 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              Filter reviews by:{" "}
              <select
                onChange={onSelectFilter}
                name="travelledWith"
                id="travelledWith"
                defaultValue={filterState.filterBy}
              >
                {filters.map((filter, index) => (
                  <option key={index} value={filter}>
                    {filter || "ALL"}
                  </option>
                ))}
              </select>
            </div>
            <div className="ml-auto flex">
              {sorting.map(([sortTitle, sortName]) => (
                <div className="ml-4" key={sortName}>
                  <input
                    onChange={onSortBy}
                    type="radio"
                    id={sortName}
                    name="sortBy"
                    value={sortName}
                    checked={filterState.sortBy === sortName}
                  />
                  <label htmlFor={sortName}>{sortTitle}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl px-8 mt-5 mx-auto">
        {isFetchingReviews && <>Is fetching reviews...</>}

        {!isFetchingReviews &&
          reviews.map((review) => (
            <div className="my-5" key={review.id}>
              <strong>Title:</strong>
              {review.titles[review.locale]} <br />
              <strong>TravelledWith:</strong> {review.traveledWith} <br />
              <strong>Travel date:</strong>{" "}
              {new Date(review.travelDate).toLocaleDateString()} <br />
              <strong>Entry date:</strong>{" "}
              {new Date(review.entryDate).toLocaleDateString()} <br />
            </div>
          ))}
      </div>
    </>
  );
}
