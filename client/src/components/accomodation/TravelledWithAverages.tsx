import { AverageRatings } from "../../interfaces/ratings";
import { Subtitle } from "../shared/Subtitle";

type Props = {
  isLoading: boolean;
  ratings?: AverageRatings["traveledWithAvg"];
};

export function TravelledWithAverages({ isLoading, ratings }: Props) {
  return (
    <>
      <Subtitle>The percentages of travelledWith</Subtitle>

      {isLoading && <>Loading ratings...</>}

      {!isLoading && ratings && (
        <>
          {Object.keys(ratings).map((travelledWith) => (
            <p key={travelledWith}>
              {travelledWith}: {ratings[travelledWith]}
            </p>
          ))}
        </>
      )}
    </>
  );
}
