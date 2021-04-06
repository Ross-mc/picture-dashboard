import { createContext } from "react";

const SettingsContext = createContext({
  timeDisplay: {
    show: true,
    format: 24,
    seconds: true
  },
  dateDisplay: {
    show: true,
    day: true,
    format: "long"
  },
  font: {
    color: "#FFFFFF"
  },
  photo: {
    interval: 0.25,
    searchTerm: "landscape"
  }
});

export default SettingsContext