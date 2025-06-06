function UserGreetings({ 
  username = "Guest",
  isLoggedIn = false
}) {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>{isLoggedIn ? "You are logged in." : "Please log in."}</p>
    </div>
  );
}

export default UserGreetings;
