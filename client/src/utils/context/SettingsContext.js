import { createContext, useReducer, useContext } from "react";
// the 'schema' of the settings context is provided here but the valued are controlled by state in APP.js
const initialState = {
  timeDisplay: {
    show: true,
    hour12: false,
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
}
const SettingsContext = createContext()

const { Provider } = SettingsContext;

const reducer = (state, action) => {
  const tempState = { ...state }
  switch (action.type) {
    case "showTime":
      tempState.timeDisplay.show = false
      return tempState


    default:
      return tempState
  }
};

const SettingsProvider = ({
  value = initialState, ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);
  return <Provider value={[state, dispatch]} {...props} />
};

const useSettingsContext = () => useContext(SettingsContext)

export { SettingsProvider, useSettingsContext }