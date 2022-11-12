# Assignment summary & taken assumptions

## Converting to Typescript

I converted both the server and client to typescript. Maybe there is another way to do this combined with Lerna, but I am not familiar with that tool, so I skipped that for now.

Some arguments are still any type or doing type castings as I didnt want to spend too much time on that for the assignment.

For the server I did not make a clear distinction yet in the package.json for devDependencies.

## Task 1, calculating review weight

I took some assumptions here. Normally I would verify this while working on the task with the team/PM etc.

Assuming the date required to calculate the average is: `entryDate`

Assuming the `entryDate` is a UNIX timestamp in ms.

Assuming from the task description that when the difference in years is less than 5, we calculate the difference taking only the year of date of the review (so regardless if it were written in january or december) and not necessarily calculate the full difference in years up until now.

## Task 2

For now, due to lack of time, I only handled the happy path and have not implemented an error state if something went wrong fetching data.

For the sort order I assumed for now 'new to old' (desc) which is how the server returns the data. I would image in the future the user could be able to reverse the sort order.
