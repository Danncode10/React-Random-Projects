function UserGreetings({ 
  username = "Guest",
  isLoggedIn = false
    }) {
    if (isLoggedIn){
        return (
        <div className="welcome-message">
            <p>Welcome back, {username}!</p>
        </div>
        );
    }
    else {
        return (
        <div className="login-prompt">
            <p>Hello, {username}! Please log in.</p>
        </div>
        );
    }
}

export default UserGreetings;


// import UserGreetings from './L5/UserGreetings.jsx';

// function App() {
//   return (
//     <UserGreetings username="Dann" isLoggedIn={true}/>
//   );
// }

// export default App;

