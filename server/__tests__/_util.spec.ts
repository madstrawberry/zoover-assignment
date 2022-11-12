import * as util from "../_util";

describe("utils", () => {
  describe("getReviewWeight", () => {
    it("returns 0.5 for reviews older than 5 years", () => {
      const review: any = {
        entryDate: 1266252490713,
      };

      expect(util.getReviewWeight(review)).toBe(0.5);
    });

    it("returns 1 for reviews in the same year", () => {
      Date.now = jest.fn(() => 1668283238216);

      const review: any = {
        entryDate: 1668203238216,
      };

      expect(util.getReviewWeight(review)).toBe(1);
    });

    it("returns calculated value for reviews newer than 5 years", () => {
      Date.now = jest.fn(() => 1668283238216);

      const review: any = {
        entryDate: 1568203238216,
      };

      expect(util.getReviewWeight(review)).toBe(0.7);
    });
  });
});
