import { useSettingsContext } from "../utils/context/SettingsContext";

const SettingsForm = () => {

  const [{ timeDisplay, dateDisplay, font }, dispatch] = useSettingsContext();
  return (
    <form>
      <fieldset>
        <legend>Time Display</legend>
        <label htmlFor="timeDisplay">Display Time</label>
        <input
          type="checkbox"
          name="timeDisplay"
          id="timeDisplay"
          checked={timeDisplay.show}
          onChange={() => dispatch({ type: "showTime" })}
        />
        <label htmlFor="12Hour">12 Hour Format</label>
        <input
          type="checkbox"
          name="12Hour"
          id="12Hour"
          checked={timeDisplay.hour12}
          onChange={() => dispatch({ type: "hour12" })}
        />
        <label htmlFor="seconds">Display Seconds</label>
        <input
          type="checkbox"
          name="seconds"
          id="seconds"
          checked={timeDisplay.seconds}
          onChange={() => dispatch({ type: "seconds" })}
        />
      </fieldset>
      <fieldset>
        <legend>Date Display</legend>
        <label htmlFor="dateDisplay">Display Date</label>
        <input
          type="checkbox"
          name="dateDisplay"
          id="dateDisplay"
          checked={dateDisplay.show}
          onChange={() => dispatch({ type: "showDate" })}
        />
        <label htmlFor="day">Display Day of Week</label>
        <input
          type="checkbox"
          name="day"
          id="day"
          checked={dateDisplay.day}
          onChange={() => dispatch({ type: "dayOfWeek" })}
        />
        <label htmlFor="year">Display Year</label>
        <input
          type="checkbox"
          name="year"
          id="year"
          checked={dateDisplay.format === "long"}
          onChange={() => dispatch({ type: "year" })}
        />
      </fieldset>
      <fieldset>
        <legend>Font</legend>
        <label htmlFor="font-color">Font Colour</label>
        <input type="color" name="font-color" id="font-color" value={font.color} onInput={(e) => dispatch({type: "color", payload: e.target.value})}/>
      </fieldset>
    </form>
  );
};

export default SettingsForm;
