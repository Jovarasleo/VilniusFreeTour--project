import { createContext, useState } from "react";
const DEFAULT_STATE = {
  pages: [],
};
const DynamicPageContext = createContext(DEFAULT_STATE);

function DynamicPageProvider({ children }) {
  const [page, setPage] = useState(DEFAULT_STATE.pages);
  return (
    <DynamicPageContext.Provider value={{ page, setPage }}>
      {children}
    </DynamicPageContext.Provider>
  );
}

export default DynamicPageContext;
export { DynamicPageProvider };
