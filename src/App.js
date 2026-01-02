import UserProfile from "./Components/UserProfile/UserProfile";

function App() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return <UserProfile user={user} />;
}

export default App;
