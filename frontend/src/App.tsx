import "./App.css"; // Import CSS styles
import teamsData from "./CollegeBasketballTeams.json"; // Import JSON data directly from the `src` folder

// Transform the raw JSON data into a new structure
const teamNames = teamsData.teams.map((team) => ({
  schoolName: team.school, // School name (e.g., "Duke")
  mascotName: team.name, // mascot name (e.g., "Blue Devils")
  location: `${team.city}, ${team.state}`, // Location formatted as "City, State"
}));

// Welcome component that displays a heading
function Welcome() {
  return <h1>Welcome to a list of information about all the colleges in NCAA Basketball!</h1>;
}

// Team component to display individual team details
function Team({
  schoolName,
  mascotName,
  location,
}: {
  schoolName: string;
  mascotName: string;
  location: string;
}) {
  return (
    <>
      <h2>{schoolName}</h2> {/* Display school name */}
      <h3>Mascot Name: {mascotName}</h3> {/* Display mascot name */}
      <h3>Location: {location}</h3> {/* Display location */}
    </>
  );
}

// TeamList component that loops through `teamNames` and renders a `Team` component for each entry
function TeamList() {
  return (
    <>
      {teamNames.map((singleTeam) => (
        <Team key={singleTeam.schoolName} {...singleTeam} /> // Spread operator to pass all props at once
      ))}
    </>
  );
}

// Main App component that renders the Welcome message and the TeamList
function App() {
  return (
    <>
      <Welcome /> {/* Renders the welcome message */}
      <TeamList /> {/* Renders the list of teams */}
    </>
  );
}

export default App;
