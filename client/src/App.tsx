import { useEffect, useState } from "react";
import "./App.css";
import { AspectAverages } from "./components/accomodation/AspectAverages";
import { TravelledWithAverages } from "./components/accomodation/TravelledWithAverages";
import { PageTitle } from "./components/shared/PageTitle";
import { AverageRatingsResponse } from "./interfaces/ratings";
import { Reviews } from "./components/accomodation/Reviews";

function App() {
  const [averageRatings, setAverageRatings] = useState<
    AverageRatingsResponse | undefined
  >(undefined);

  const [isFetchingRatings, setIsFetchingRatings] = useState(true);

  async function fetchAverageRating() {
    setIsFetchingRatings(true);

    const response = await fetch("http://localhost:8080/reviews/average");
    const data: AverageRatingsResponse = await response.json();

    // Add fake delay to imitate time it takes to fetch the data
    setTimeout(() => {
      setAverageRatings(data);
      setIsFetchingRatings(false);
    }, 200);
  }

  useEffect(() => {
    fetchAverageRating();
  }, []);

  return (
    <div className="mt-8">
      <div className="max-w-5xl px-8 mx-auto">
        <PageTitle>XXX Accomodation</PageTitle>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="mt-5 ">
          <AspectAverages
            isLoading={isFetchingRatings}
            ratings={averageRatings?.aspecsAvg}
          />
        </div>

        <div className="mt-5 ">
          <TravelledWithAverages
            isLoading={isFetchingRatings}
            ratings={averageRatings?.aspecsAvg}
          />
        </div>
      </div>

      <div className="bg-slate-100 border-y border-slate-200 mt-5">
        <div className="max-w-5xl px-8 py-3 mx-auto">Filter reviews by:</div>
      </div>

      <div className="max-w-5xl px-8 mt-5 mx-auto">
        <Reviews />
      </div>
    </div>
  );
}

export default App;
