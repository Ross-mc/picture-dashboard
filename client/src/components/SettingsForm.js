import { useSettingsContext } from "../utils/context/SettingsContext";

const SettingsForm = () => {
  const [
    { timeDisplay, dateDisplay, font, photo, saveToLocalStorage },
    dispatch,
  ] = useSettingsContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveToLocalStorage({ timeDisplay, dateDisplay, font, photo });
      }}
    >
      <fieldset>
        <legend>Time Display</legend>
        <div className="form-group">
          <label htmlFor="timeDisplay">Display Time</label>
          <input
            type="checkbox"
            name="timeDisplay"
            id="timeDisplay"
            checked={timeDisplay.show}
            onChange={() => dispatch({ type: "showTime" })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="12Hour">12 Hour Format</label>
          <input
            type="checkbox"
            name="12Hour"
            id="12Hour"
            checked={timeDisplay.hour12}
            onChange={() => dispatch({ type: "hour12" })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="seconds">Display Seconds</label>
          <input
            type="checkbox"
            name="seconds"
            id="seconds"
            checked={timeDisplay.seconds}
            onChange={() => dispatch({ type: "seconds" })}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Date Display</legend>
        <div className="form-group">
          <label htmlFor="dateDisplay">Display Date</label>
          <input
            type="checkbox"
            name="dateDisplay"
            id="dateDisplay"
            checked={dateDisplay.show}
            onChange={() => dispatch({ type: "showDate" })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="day">Display Day</label>
          <input
            type="checkbox"
            name="day"
            id="day"
            checked={dateDisplay.day}
            onChange={() => dispatch({ type: "dayOfWeek" })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Display Year</label>
          <input
            type="checkbox"
            name="year"
            id="year"
            checked={dateDisplay.format === "long"}
            onChange={() => dispatch({ type: "year" })}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Font</legend>
        <div className="form-group">
          <label htmlFor="font-color">Font Colour</label>
          <input
            type="color"
            name="font-color"
            id="font-color"
            value={font.color}
            onInput={(e) =>
              dispatch({ type: "color", payload: e.target.value })
            }
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Photos</legend>
        <div className="form-group">
          <label htmlFor="interval">Interval</label>
          <select
            name="interval"
            id="interval"
            onChange={(e) => {
              dispatch({ type: "interval", payload: e.target.value });
            }}
          >
            <option value="0.25">15 Seconds</option>
            <option value="0.5">30 Seconds</option>
            <option value="1">1 Minute</option>
            <option value="2">2 Minutes</option>
            <option value="5">5 Minutes</option>
            <option value="10">10 Minutes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            onChange={(e) => {
              dispatch({ type: "category", payload: e.target.value });
            }}
          >
            <option value="landscape">Landscape</option>
            <option value="cityscape">City</option>
            <option value="wildlife">Wildlife</option>
            <option value="mountains">Mountains</option>
            <option value="sea">Sea</option>
            <option value="astronomy">Space</option>
          </select>
        </div>
      </fieldset>
      <button type="submit" className="btn btn-taskbar">Save Settings</button>
    </form>
  );
};

export default SettingsForm;
