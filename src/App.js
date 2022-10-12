import React from "react";
const arr = JSON.parse(

 window.localStorage.getItem("props") || `["hello","world"]`

); // do not change

const Join = (props) => {

 return (

 <div id="join">

 {/* Access prop 'words' and print it using .join like words.join(',')*/}

 {arr.join(",")}

 </div>

 );

};

const App = () => {

 return (

 <div id="main">

 <Join arr={arr} />

 </div>

 );

};

 

export default App;