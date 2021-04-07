import { createContext } from "react";
// the 'schema' of the settings context is provided here but the valued are controlled by state in APP.js
const SettingsContext = createContext({
  timeDisplay: {
    show: undefined,
    hour12: undefined,
    seconds: undefined
  },
  dateDisplay: {
    show: undefined,
    day: undefined,
    format: undefined
  },
  font: {
    color: undefined
  },
  photo: {
    interval: undefined,
    searchTerm: undefined
  },
  onChange: () => { }
});

export default SettingsContext