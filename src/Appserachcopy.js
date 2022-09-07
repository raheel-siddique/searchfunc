import React, { useState } from 'react'
import './App.css';

function App() {
  let [search, setSearch] = useState('')

  let [data, setData] = useState([{ name: 'raheel', age: '21', qualification: 'bcs' },
  { name: 'rasim', age: '20', qualification: 'imnter' },
  { name: 'daniyal', age: '18', qualification: 'matrik' },
  { name: 'raheel', age: '10', qualification: 'nine' },
  { name: 'aman', age: '29', qualification: 'bcs' },
  { name: 'Rafay', age: '15', qualification: 'inter' }])
 

  const handleSearch = (event) => {
    setSearch(event.target.value)
  
    
  }

  let newVlaues=data.filter((values)=>{
    return values.name.includes(search)
  })

  // const searhcFnc=()=>{
   
  // }
  return (
    <div className="App">
      <input type="text" placeholder='serach here' value={search} onChange={handleSearch} />
      {/* <button onClick={searhcFnc}>Search</button> */}
      <table border='1'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Qualification</th>


        </tr>
        {newVlaues?.map((values) => {
          return (
            <>
              <tr>
                <th>{values.name}</th>
                <th>{values.age}</th>
                <th>{values.qualification}</th>


              </tr>
            </>
          )
        })}

      </table>
    </div>
  );
}

export default App;
