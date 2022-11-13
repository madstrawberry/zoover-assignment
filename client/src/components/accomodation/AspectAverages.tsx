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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.keys(ratings).map((aspectName) => {
            let value = ratings[aspectName];

            return (
              <div key={aspectName}>
                {aspectName} : {value}
                <div>
                  {new Array(10).fill("").map((_, index) => {
                    const diff = index + 1 - value;

                    let starFill = 100;

                    if (diff > 0 && diff < 1) {
                      starFill = 100 - Math.round(diff * 100);
                    } else if (diff > 0) {
                      starFill = 0;
                    }

                    const id = index + aspectName;

                    return <Star key={id} fill={starFill} id={id} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

function Star({ fill, id }: { fill: number; id: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 inline">
      <defs>
        <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset={`${fill}%`}
            style={{ stopColor: "rgb(245, 165, 27)", stopOpacity: 1 }}
          />
          <stop
            offset={`${fill}%`}
            style={{ stopColor: "rgb(227, 227, 227)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${`gradient-${id}`})`}
        d="M18.49 22.999a.509.509 0 0 1-.243-.062L12 19.479l-6.247 3.458a.502.502 0 0 1-.736-.519l1.2-7.357-5.075-5.205a.5.5 0 0 1 .283-.845l6.991-1.07 3.132-6.678c.164-.35.74-.35.904 0l3.132 6.678 6.991 1.07a.499.499 0 0 1 .282.845l-5.073 5.205 1.198 7.357a.502.502 0 0 1-.493.58"
      ></path>
    </svg>
  );
}
