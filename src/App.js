
import './App.css';
import {FilterComponent} from "./Components/filterComponent"
import {CardsWrapper} from "./Components/CardWrapper/cardWrapper";
import {dummyData } from "./DummyData/index"

function App() {
  let locationarray = ["All","Delhi","Noida"];
  let priceArray = ["All","$0-500","$500-2500", "$2500-Above"];
  let properyTypeArray = ["All","House","Apartment","Mansion"]
  return (
    <div className="App">
      <h1>Rent a Property</h1>
      <div>
        <h2>Search properties for rent</h2>
        <input placeholder='search here' />
      </div>
      <div>
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
