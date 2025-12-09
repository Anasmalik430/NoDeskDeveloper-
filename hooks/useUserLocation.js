// hooks/useUserLocation.js
import { useState, useEffect } from "react";

export default function useUserLocation() {
  const [country, setCountry] = useState("India");
  const [currency, setCurrency] = useState("INR");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("userGeo");
    if (cached) {
      const { country_name, currency, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
        // 24 hours
        setCountry(country_name);
        setCurrency(currency);
        setLoading(false);
        return;
      }
    }

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_name && data.currency) {
          setCountry(data.country_name);
          setCurrency(data.currency);
          localStorage.setItem(
            "userGeo",
            JSON.stringify({
              country_name: data.country_name,
              currency: data.currency,
              timestamp: Date.now(),
            })
          );
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { country, currency, loading };
}
