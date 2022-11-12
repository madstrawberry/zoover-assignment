import "./App.css";
import { PageTitle } from "./components/PageTitle";
import { Subtitle } from "./components/Subtitle";

function App() {
  return (
    <div className="mt-8">
      <div className="max-w-5xl px-8 mx-auto">
        <PageTitle>XXX Accomodation</PageTitle>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="mt-5 ">
          <Subtitle>The average ratings for this accomodation</Subtitle>
        </div>

        <div className="mt-5 ">
          <Subtitle>The percentages of travelledWith</Subtitle>
        </div>
      </div>
    </div>
  );
}

export default App;
