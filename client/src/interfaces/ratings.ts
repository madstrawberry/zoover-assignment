export type AverageRatings = {
  generalAvg: number;
  aspecsAvg: {
    [key: string]: number;
  };
  traveledWithAvg: {
    [key: string]: number;
  };
};
