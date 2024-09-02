import React from 'react'

const App = () => {
  const val = 5;
  const name = "Goldy";
  const person={
    name:name,
    age:18,
    gmail: "gmaile.com",
    pincode : 1232432
  }
  return (
    <div>
      <h1>Web Dev Mastery</h1>
      <h2>Age: {person.age}</h2>
      <h2>Name: {person.name}</h2>
      <h2>Suman</h2>
      <h1>2+5</h1>
      <h1>{2+5}</h1>
      <h3>{val}</h3>
      <h1>{name}</h1>
    </div>
  )
}

export default App

// 1.
// one function at one time will reaturn only one value 
// this is invalid
/* <Div></Div>
<div></div>. */

// valid
// {/* <> -> fregment  */} in the fegment we can use multiple div

// 2.babel

