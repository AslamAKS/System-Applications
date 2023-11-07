import React, { useContext, useEffect, useState } from "react";
import "./SearchCity.css";
import axios from "axios";
import { ContextSearch } from "../../Context/SearchContext";

function SearchCity() {
  const [allCity, setAllCity] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [showResults, setShowResults] = useState(true);

  const { searchResult, setDataAvailable } = useContext(ContextSearch);

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((responce) => {
        const result = responce.data.data;
        const cities = result
          .map((country) => country.cities)
          .reduce(
            (accumulator, cityNames) => accumulator.concat(cityNames),
            []
          );
        setAllCity(cities);
      })
      .catch((e) => console.log(e));
  });

  const handleFilter = (event) => {
    setShowResults(true);
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allCity.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
      setDataAvailable(false)
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter City Here..."
          maxLength={100}
          value={wordEntered}
          onChange={handleFilter}
          onKeyDown={
            (e)=>{
              if(e.key==="Enter") {
                searchResult(wordEntered);
                  setShowResults(false);
                  setWordEntered(wordEntered);
              }
            }
          }
        />
      </div>
      {showResults && filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 7).map((value) => {
            return (
              <h5
                onClick={() => {
                  searchResult(value);
                  setShowResults(false);
                  setWordEntered(value);
                }}
              >
                {value}
              </h5>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchCity;
