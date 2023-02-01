import React, { useState }from 'react';

export default function Seasons() {
    const years = ['Seasons', '2003', '2004', '2005', '2006']
    const [chosenSeason, setChosenSeason] = useState('')
    const handleGetSeason = () => {
    setChosenSeason(years)
  }
    return (
        <select name="" id="" onChange={handleGetSeason}>
            {years.map((year) => {
              return  <option key={year} value="">{year}</option>
            })}
        </select>
    )
}