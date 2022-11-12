import { AverageRatingsResponse } from "../../interfaces/ratings";
import { Subtitle } from "../shared/Subtitle";

type Props = {
  isLoading: boolean;
  ratings?: { [aspectName: string]: number };
};

export function AspectAverages({ isLoading, ratings }: Props) {
  return (
    <>
      <Subtitle>The average ratings for this accomodation</Subtitle>

      {isLoading && <>Loading ratings...</>}

      {!isLoading && ratings && (
        <>
          {Object.keys(ratings).map((aspectName) => (
            <p key={aspectName}>
              {aspectName}: {ratings[aspectName]}
            </p>
          ))}
        </>
      )}
    </>
  );
}
