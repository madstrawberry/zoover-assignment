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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {Object.keys(ratings).map((travelledWithType) => (
            <div key={travelledWithType}>
              {travelledWithType}:{" "}
              <div className="h-3 bg-slate-200 relative">
                <div
                  className="h-3 absolute left-0 bg-blue-700"
                  style={{ width: `${ratings[travelledWithType] * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
