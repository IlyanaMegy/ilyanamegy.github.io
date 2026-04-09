import { createContext, useContext, useEffect, useState } from "react";

const DeviceContext = createContext(false);

export const useDevice = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateDevice = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateDevice);

    return () => mediaQuery.removeEventListener("change", updateDevice);
  }, []);

  return <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>;
};