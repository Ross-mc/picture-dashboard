import { createContext, useReducer, useContext } from "react";
// created the initial state of the application, i.e. the default settings values
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
//create a context
const SettingsContext = createContext()
// destructuer the provider component that is created by createcontext
const { Provider } = SettingsContext;

//define our reducer callback, here we will add different actions which update state accordingly
const reducer = (state, action) => {
  //spread existing state, mutate temp object, return the tempstate. We could return a spread but I think this way looks cleaner especially as state is nested
  const tempState = { ...state }
  switch (action.type) {
    case "showTime":
      tempState.timeDisplay.show = !tempState.timeDisplay.show
      return tempState


    default:
      return tempState
  }
};
//higher order component, gets the initial value of state as a default param

// the example I used spread props, I am not currently show how this operates but it is required for now
const SettingsProvider = ({
  value = initialState, ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);
  // the use reducer takes our reduce func and the initial value of state, when dispatch is called it will update state which the whole application has access to by using the custom hook below
  return <Provider value={[state, dispatch]} {...props} />
};
// custom hook to allow any component access to state and to dispatch (to update state)
const useSettingsContext = () => useContext(SettingsContext)

export { SettingsProvider, useSettingsContext }