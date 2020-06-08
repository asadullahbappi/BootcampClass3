import React from 'react';
import './App.css';
import Dinner from './dinner.js';


function App() {
  return (
   <div className="App">
     {/* <Dinner /> */}
     <Dinner dishName="Nihari" sweetDish="Kheer"/>
     <hr/>
     <Dinner dishName="Biryani" sweetDish="Jalibi"/>
     <hr/>
     <Dinner dishName="Kharai" sweetDish="Gajar Ka Halwa"/>

   </div>
  );
}

export default App;
