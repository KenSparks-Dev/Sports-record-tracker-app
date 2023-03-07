import React, { useState }from 'react';

export default function SeasonSelector({years=[]}) {
    return (
        <select name="" id="">
            {years.map((year) => {
              return  <option key={year} value={year}>{year}</option>
            })}
        </select>
    )
}