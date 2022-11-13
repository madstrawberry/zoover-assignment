# Assignment summary & taken assumptions

## Converting to Typescript

I converted both the server and client to typescript. Maybe there is another way to do this combined with Lerna, but I am not familiar with that tool, so I skipped that for now.

Some arguments in the server are still `any` type or doing type castings as I didnt want to spend too much time on that for the assignment.

While installing packages I did not make a clear distinction yet in the package.json for devDependencies.

## Task 1, calculating review weight

I took some assumptions here. Normally I would verify this while working on the task with the team/PM etc.

Assuming the date required to calculate the average is: `entryDate`

Assuming the `entryDate` is a UNIX timestamp in ms.

Assuming from the task description that when the difference in years is less than 5, we calculate the difference taking only the year of date of the review (so regardless if it were written in january or december) and not necessarily calculate the full difference in years up until now.

## Task 2

For now, due to lack of time, I only handled the happy path and have not implemented an error state if something went wrong fetching data.

For the sort order I assumed for now 'new to old' (desc) which is how the server returns the data. I could image in the future the user would be able to reverse the sort order.

## Improvements

- The implementation of showing the star rating can be improved a lot by
  - not using gradients for full or empty stars
  - defining reusable star path
  - defining reusable gradients for all 9 steps and reuse them instead of generating them for each star
- Add aria attributes for accessibility/screen readers
- Look into using React Query for caching the results from the API
- Improve the loading state, this can be a shared Loader component, or it could be a skeleton kind of loader
- Add an error state for fetching reviews/review averages, or possibily retry functionality. The decision what to do/show here would have to be discussed
- Possibily look into using useCallback/useMemo inside the components for performance

## Unit Testing

- I would extract the `Star` component and the logic to calculate the fill rate, so it can have it's own test to check if the fill rate would be determined correctly
- I would test the `ReviewsApi` to verify we build the correct `/reviews` URL based on the props we pass to it
- I would test the `Reviews` component and verify:
  - the loader shows correctly
  - sorting and filtering calls the `ReviewsApi` with the correct filterState
  - sorting and filtering refreshes the shown reviews (we should mock the `ReviewsApi`, but still assert we update the reviews)
- I would test the `App` component and verify:
  - it starts fetching the review averages
  - the loading state is set correctly for AspectAverages & TravelledWithAverages
  - the TravelledWithAverages shows the correct amount of scores
  - the AspectAverages shows the correct amount of scores
