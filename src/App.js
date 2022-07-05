import React, { useEffect, useState } from "react"
import './App.css';
import { FilterComponent } from "./Components/FilterComponent/filterComponent"
import { CardsWrapper } from "./Components/CardWrapper/cardWrapper";
import { dummyData, locationarray, priceArray, properyTypeArray } from "./DummyData/index"

function App() {

  // State 
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState({
    price: "All",
    location: "All",
    type: "All",
    when: "All"
  })
  const [input,setInput]= useState("");

  // useEffect use 
  useEffect(()=>{
    setData(dummyData.filter(item => item.name.toLowerCase().startsWith(input)))
  },[input])

  useEffect(()=>{
    setData(dummyData)
  },[])

  // handleChange made
  const handleInput = (event) => {
    setInput(event.target.value)
  }
  const handleChange = (event) => {
    const name = event.target.name
    setFilterData({
      ...filterData,
      [name]: event.target.value
    })
  }

  // handleSubmit made
  const handleSubmit = (event) => {
    event.preventDefault()
    const newdata = dummyData
      .filter(item => {
        if (filterData.type === "All") {
          return item
        } else {
          return filterData.type.toLowerCase() === item.properyType.toLowerCase()
        }
      })
      
      .filter(item => {
        if (filterData.location === "All") {
          return item
        } else {
          return filterData.location.toLowerCase() === item.location.toLowerCase()
        }
      })
      .filter(item => {
        if (filterData.price === "All") {
          return item
        } else if (filterData.price === "$0-500") {
          return item.price < 500
        } else if (filterData.price === "$500-2500") {
          return item.price < 2500 && item.price >= 500
        } else {
          return item.price >= 2500
        }
      })
      setData(newdata)
  }
  return (
    <div className="App">
      <div className='app-header'>
        <div>Search properties for rent</div>
        <input placeholder='search here' value={input} onChange={(event)=>handleInput(event)} />
      </div>
      <div className='filterSection'>
        <FilterComponent
          title="Location"
          name="location"
          array={locationarray}
          value={filterData.location}
          handleChange={handleChange}
        />
        <FilterComponent
          title="When"
          name="when"
          array={locationarray}
          value={filterData.when}
          handleChange={handleChange}
        />
        <FilterComponent
          title="Price"
          name="price"
          array={priceArray}
          value={filterData.price}
          handleChange={handleChange}
        />
        <FilterComponent
          title="Property Type"
          name="type"
          array={properyTypeArray}
          value={filterData.type}
          handleChange={handleChange}
        />
        <button onClick={(event)=>handleSubmit(event)}>Search</button>
      </div>
      <div>
        <CardsWrapper array={data} />
      </div>
    </div>
  );
}

export default App;
