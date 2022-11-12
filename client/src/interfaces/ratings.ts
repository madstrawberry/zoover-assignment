export type AverageRatingsResponse = {
  generalAvg: number;
  aspecsAvg: {
    [key: string]: number;
  };
  traveledWithAvg: {
    [key: string]: number;
  };
};
