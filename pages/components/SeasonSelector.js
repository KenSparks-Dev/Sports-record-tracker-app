export default function SeasonSelector({SEASONS=[]}) {
      return (
      <form>
      <label htmlFor="season-selector" >Seasons: </label>
        <select name="season-selector" id="season-selector" >
            {SEASONS.map((SEASONS) => {
              return  <option key={SEASONS.year} value={SEASONS.year}>{SEASONS.season}</option>
            })}
        </select>
      </form>
    )
}