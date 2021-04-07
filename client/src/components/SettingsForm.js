import { useSettingsContext } from "../utils/context/SettingsContext"

const SettingsForm = () => {
  // const [{ timeDisplay }, dispatch] = useSettingsContext();
  const [{ timeDisplay }, dispatch] = useSettingsContext();
  return (
    <form>
      <fieldset>
        <legend>Time Display</legend>
        <label for="timeDisplay">Display</label>
        <input type="checkbox" name="timeDisplay" id="timeDisplay" checked={timeDisplay.show} onChange={() => dispatch({ type: "showTime" })} />
        <label for="12Hour">12 Hour Format</label>
        <input type="checkbox" name="12Hour" id="12Hour" checked={timeDisplay.hour12} />
        <label for="seconds">Display Seconds</label>
        <input type="checkbox" name="seconds" id="seconds" checked={timeDisplay.seconds} />
      </fieldset>
    </form>
  )
}

export default SettingsForm