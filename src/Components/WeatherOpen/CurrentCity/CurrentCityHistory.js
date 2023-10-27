import React, { useEffect } from 'react'

function CurrentCityHistory() {

    useEffect(()=>{
        const twelveHoursInMilliseconds = 12 * 60 * 60 * 1000;

const timeTwelveHoursAgo = Date.now() - twelveHoursInMilliseconds;
const timeTwelveHoursFromNow = Date.now() + twelveHoursInMilliseconds;

console.log('Time 12 Hours Ago (milliseconds):', timeTwelveHoursAgo);
console.log('Time 12 Hours from Now (milliseconds):', timeTwelveHoursFromNow);
    },[])

  return (
    <div>CurrentCityHistory</div>
  )
}

export default CurrentCityHistory