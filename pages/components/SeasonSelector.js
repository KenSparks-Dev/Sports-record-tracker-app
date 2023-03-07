import React from 'react';

export default function SeasonSelector({years=[]}) {
      return (
      <form>
      <label htmlFor="season-selector" >Seasons: </label>
        <select name="season-selector" id="season-selector" >
            {years.map((years) => {
              return  <option key={years.year} value={years.year}>{years.season}</option>
            })}
        </select>
      </form>
    )
}