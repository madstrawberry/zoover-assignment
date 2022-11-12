import { Subtitle } from "../shared/Subtitle";

type Props = {
  isLoading: boolean;
  ratings?: { [travelledWithType: string]: number };
};

export function TravelledWithAverages({ isLoading, ratings }: Props) {
  return (
    <>
      <Subtitle>The percentages of travelledWith</Subtitle>

      {isLoading && <>Loading ratings...</>}

      {!isLoading && ratings && (
        <>
          {Object.keys(ratings).map((travelledWithType) => (
            <p key={travelledWithType}>
              {travelledWithType}: {ratings[travelledWithType]}
            </p>
          ))}
        </>
      )}
    </>
  );
}
