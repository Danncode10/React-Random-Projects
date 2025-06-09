
function Button(){


    const handleClick = (event) => 
    {
        if (event.target.textContent === "Ouch") {
            event.target.textContent = "Click Me";
        }
        else{
            event.target.textContent = "Ouch";
        }
    }
        
  return (
    <>
        <button onClick={(e) => handleClick(e)}>Click Me</button>
    </>

  );

}

export default Button;


// import Button from "./Button";

// function App() {
   
//   return(
//     <>
//       <Button />
//     </>
//   );
// }

// export default App;
