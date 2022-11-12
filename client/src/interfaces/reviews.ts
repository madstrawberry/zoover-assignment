import { Review } from "../../../server/interfaces";

export type ReviewsResponse = {
  all: Review[];
  filtered: Review[];
  limited: Review[];
};
