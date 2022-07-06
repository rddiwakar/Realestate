import React, { useEffect, useState } from "react"
import './App.css';
import { FilterComponent } from "./Components/FilterComponent/filterComponent"
import { CardsWrapper } from "./Components/CardWrapper/cardWrapper";
import { dummyData, locationarray, priceArray, properyTypeArray, whenArray } from "./DummyData/index"
import { RiSearchLine as SearchIcon } from "react-icons/ri";
import {GiHamburgerMenu as HemburgerIcon} from "react-icons/gi";
function App() {

  // State 
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState({
    price: "All",
    location: "All",
    type: "All",
    when: "All"
  })
  const [input, setInput] = useState("");
  const [display,setDisplay] = useState(false);
  const [mobileDisplay,setMobileDisplay] = useState(false);

  // useEffect use 
  useEffect(() => {
    setData(dummyData.filter(item => item.name.toLowerCase().startsWith(input.toLowerCase())))
  }, [input])

  useEffect(() => {
    setData(dummyData)
  }, [])

  useState(()=>{
    const width = window.innerWidth;
    width <= 800 ? setMobileDisplay(true): setMobileDisplay(false);
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
      .filter(item => {
        if (filterData.when === "All") {
          return item
        } else if (filterData.when === "1980-2000") {
          return item.made < 2000
        } else if (filterData.when === "2000-2010") {
          return item.made < 2010 && item.made >= 2000
        } else {
          return item.made >= 2010
        }
      })
    setData(newdata)
  }
  return (
    <div className="App">
      {/* header section */}

      <div className='app-header'>
        <div>Search properties for rent</div>
        <div className="searchSection">
          <SearchIcon className="searchicon" />
          <input placeholder='search here' value={input} onChange={(event) => handleInput(event)} />
        </div>
      </div>

      {/* filter section */}
      {mobileDisplay && <HemburgerIcon style={{cursor:"pointer"}}  onClick={()=>setDisplay(!display)}/>}

      <div className='filterSection' style={{display:mobileDisplay ?(display ? "block":"none"): "flex" }}>

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
          array={whenArray}
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
        <button onClick={(event) => handleSubmit(event)}>Search</button>
      </div>
      {/* cards section */}
      <CardsWrapper array={data} />
    </div>
  );
}

export default App;
