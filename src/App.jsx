import React from 'react'
import PropsP from "./Topics/PropsP"
import States from "./Topics/States"
import FilterFeature from './Topics/FilterFeature'
import LearnUseEffect from './Topics/LearnUseEffect'
import DataFetchingFromApi from './Topics/DataFetchingFromApi'
import FormDataHandling from './Topics/FormDataHandling'

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
    <>
   
    {/* <div>
      <h1>Web Dev Mastery</h1>
      <h2>Age: {person.age}</h2>
      <h2>Name: {person.name}</h2>
      <h2>Suman</h2>
      <h1>2+5</h1>
      <h1>{2+5}</h1>
      <h3>{val}</h3>
      <h1>{name}</h1>
    </div> */}
    {/* <div className='learnProps'>
      
        <PropsP name="Goldy" work="Developer"/>
        <PropsP name="Rina" /> 
        
    </div> */}
    {/* <div className="usestate">
        <States/>
    </div> */}
    {/* <div className="filterFun">
      <FilterFeature/>
    </div> */}
    {/* <div className="learnUseEffect">
      <LearnUseEffect/>
    </div> */}
    {/* <div className="learnFetchingFromApi">
      <DataFetchingFromApi />
    </div> */}
    <div className="learnForm">
      <FormDataHandling/>
    </div>
    </>
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

