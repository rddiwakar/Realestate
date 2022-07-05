
import './App.css';
import {FilterComponent} from "./Components/FilterComponent/filterComponent"
import {CardsWrapper} from "./Components/CardWrapper/cardWrapper";
import {dummyData } from "./DummyData/index"

function App() {
  let locationarray = ["All","Delhi","Noida"];
  let priceArray = ["All","$0-500","$500-2500", "$2500-Above"];
  let properyTypeArray = ["All","House","Apartment","Mansion"]
  return (
    <div className="App">
      <div className='app-header'>
        <div>Search properties for rent</div>
        <input placeholder='search here' />
      </div>
      <div className='filterSection'>
        <FilterComponent name="Location" array={locationarray} />
        <FilterComponent name = "Date"  array = {locationarray} />
        <FilterComponent name = "Price" array = {priceArray} />
        <FilterComponent name= "Property Type" array ={properyTypeArray} />
        <button>Search</button>
      </div>
      <div>
        <CardsWrapper array={dummyData} />
      </div>
    </div>
  );
}

export default App;
