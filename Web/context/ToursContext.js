import { createContext, useState } from "react";
const DEFAULT_STATE = {
  tour: [],
};
const TourContext = createContext(DEFAULT_STATE);

function TourProvider({ children }) {
  const [tour, setTour] = useState(DEFAULT_STATE.tour);
  return (
    <TourContext.Provider value={{ tour, setTour }}>
      {children}
    </TourContext.Provider>
  );
}

export default TourContext;
export { TourProvider };
