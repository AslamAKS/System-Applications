import React from 'react'
import SearchCity from './SearchCity'
import SearchCityResult from './SearchCityResult'
import './Search.css'

function Search() {
  return (
    <div className="searchCity">
        <SearchCity/>
        <SearchCityResult/>
    </div>
  )
}

export default Search