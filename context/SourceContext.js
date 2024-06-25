import { createContext, useState } from 'react';

export const SourceContext = createContext();

export const SourceProvider = ({ children }) => {
  const [source, setSource] = useState([]);
  return (
    <SourceContext.Provider value={{ source, setSource }}>
      {children}
    </SourceContext.Provider>
  );
};
