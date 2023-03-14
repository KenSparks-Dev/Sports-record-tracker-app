import React, { useState }from 'react';

export default function SeasonSelector({onChange}) {
    const years = ['Seasons', '2003', '2004', '2005', '2006', '2011','2019']
    const [chosenSeason, setChosenSeason] = useState('')
    const handleChangeSeason = (event) => {
      let season = event.target.value
      setChosenSeason(season)
      onChange(season)
  }
    return (
        <select name="" id="" onChange={handleChangeSeason}>
            {years.map((year) => {
              return  <option key={year} value={year}>{year}</option>
            })}
        </select>
    )
}