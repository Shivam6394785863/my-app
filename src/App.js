import React from "react";
import data from "./Product";
import "./index.css";
import Data from "./Data";
// function check(value){
//   return(
//     <>
//       <Data data={value}/>
//     </>
//   )
// }

function App() {
  return (
    <>
      <div className="container">
       {data.map((value)=>{
        return(
          <>
            <Data data={value} key={value.pid}/>
          </>
        )
       })}
      </div>
    </>
  );
}

export default App;
