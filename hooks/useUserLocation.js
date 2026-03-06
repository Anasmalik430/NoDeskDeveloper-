// hooks/useUserLocation.js
import { useState, useEffect } from "react";

export default function useUserLocation() {
  const [country, setCountry] = useState("India");
  const [currency, setCurrency] = useState("INR");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("userGeo");
    if (cached) {
      try {
        const {
          country_name,
          currency: cachedCurrency,
          timestamp,
        } = JSON.parse(cached);
        if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
          // 24 hours cache valid
          setCountry(country_name);
          setCurrency(cachedCurrency);
          setLoading(false);
          return;
        }
      } catch (e) {
        localStorage.removeItem("userGeo");
      }
    }

    const fetchLocation = async () => {
      try {
        // Try Primary API: ipapi.co
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data.country_name && data.currency && !data.error) {
          updateLocation(data.country_name, data.currency);
        } else {
          throw new Error(data.reason || "ipapi failed");
        }
      } catch (err) {
        console.warn("Primary IP API failed, trying fallback...", err.message);
        try {
          // Fallback API: ipwho.is
          const res = await fetch("https://ipwho.is/");
          const data = await res.json();
          if (data.success && data.country && data.currency?.code) {
            updateLocation(data.country, data.currency.code);
          }
        } catch (fallbackErr) {
          console.error("All IP APIs failed:", fallbackErr.message);
        }
      } finally {
        setLoading(false);
      }
    };

    const updateLocation = (countryName, currencyCode) => {
      setCountry(countryName);
      setCurrency(currencyCode);
      localStorage.setItem(
        "userGeo",
        JSON.stringify({
          country_name: countryName,
          currency: currencyCode,
          timestamp: Date.now(),
        }),
      );
    };

    fetchLocation();
  }, []);

  return { country, currency, loading };
}
