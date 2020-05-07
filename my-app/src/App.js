import React from 'react';
import './App.css';

function App() {
  console.log("Start of apps");
  let newTestValues = [1,2,3,4,5];
  newTestValues.forEach((value)=>{
    if(value === 2){
      console.log("A == 2");
    }else if(value === 3 ){
      console.log("A == 3");
    }else {
      console.log("A != 3 ");
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calander start here</h1>
        <input className="my-date-input"
        type="text">    
        </input>
      </header>
    </div>
  );
}

export default App;
