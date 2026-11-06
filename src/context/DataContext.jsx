import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const DataContext = createContext();

export const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbx2On8puuauqP4rXIubQCbx1knDIFDsX3OKaIrAagAr0qR1klTocZOMvzt2QC6xLSsqCA/exec";
const CACHE_KEY = "rankvertise_cms_cache";

export const DataProvider = ({ children }) => {
  // 1. Initial State: Load instantly from LocalStorage Cache (Zero-delay render)
  const [data, setData] = useState(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      return cached ? JSON.parse(cached) : {};
    } catch {
      return {};
    }
  });

  const [loading, setLoading] = useState(() => Object.keys(data).length === 0);

  // 2. Fetch fresh live data from Google Sheet Web App with Timeout Abort
  const fetchLiveContent = useCallback(async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout guard

    try {
      const res = await fetch(GOOGLE_SHEET_API_URL, { signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      
      const json = await res.json();
      if (json && typeof json === 'object') {
        setData(json);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(json));
        } catch {
          // LocalStorage quota handling
        }
      }
    } catch (err) {
      console.warn("Using offline/cached configuration:", err.message);
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLiveContent();
  }, [fetchLiveContent]);

  // Robust parsing helper
  const getVal = (key, fallback) => {
    if (!data || data[key] === undefined || data[key] === null || data[key] === '') {
      return fallback;
    }
    
    const value = data[key];
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if ((trimmed.startsWith('[') && trimmed.endsWith(']')) || 
          (trimmed.startsWith('{') && trimmed.endsWith('}'))) {
        try {
          return JSON.parse(trimmed);
        } catch {
          return fallback !== undefined ? fallback : value;
        }
      }
    }
    return value;
  };

  return (
    <DataContext.Provider value={{ data, getVal, refreshData: fetchLiveContent, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);