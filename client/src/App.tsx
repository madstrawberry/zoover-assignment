import { useEffect, useState } from "react";
import "./App.css";
import { AspectAverages } from "./components/accomodation/AspectAverages";
import { TravelledWithAverages } from "./components/accomodation/TravelledWithAverages";
import { PageTitle } from "./components/shared/PageTitle";
import { AverageRatings } from "./interfaces/ratings";

function App() {
  const [averageRatings, setAverageRatings] = useState<
    AverageRatings | undefined
  >(undefined);

  const [isFetchingRatings, setIsFetchingRatings] = useState(true);

  async function fetchAverageRating() {
    setIsFetchingRatings(true);

    const response = await fetch("http://localhost:8080/reviews/average");
    const data: AverageRatings = await response.json();

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
    </div>
  );
}

export default App;
