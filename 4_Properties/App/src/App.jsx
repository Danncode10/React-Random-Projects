import Student from "./Student";

function App() {
  return (
    <div className="App">
      <h1>Student Information</h1>
      <Student name="John Doe" age={20} isStudent={true} />
      <Student name="Jane Smith" age={22} isStudent={false} />
      <Student />
    </div>
  );
}

export default App;