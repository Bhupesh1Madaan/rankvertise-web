import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

// Yahan apna Google Apps Script Web App Deployment URL dalein
export const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbx2On8puuauqP4rXIubQCbx1knDIFDsX3OKaIrAagAr0qR1klTocZOMvzt2QC6xLSsqCA/exec";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchLiveContent = async () => {
    try {
      const res = await fetch(GOOGLE_SHEET_API_URL);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.warn("Fallback to local configuration:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveContent();
  }, []);

  const getVal = (key, fallback) => {
    if (!data || data[key] === undefined || data[key] === '') return fallback;
    try {
      if (typeof data[key] === 'string' && (data[key].startsWith('[') || data[key].startsWith('{'))) {
        return JSON.parse(data[key]);
      }
    } catch (e) {
      return data[key];
    }
    return data[key];
  };

  return (
    <DataContext.Provider value={{ data, getVal, refreshData: fetchLiveContent, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);