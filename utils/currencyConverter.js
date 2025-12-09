// utils/currencyConverter.js
import { useState, useEffect } from "react";
import useUserLocation from "../hooks/useUserLocation";

export default function useINRConverter() {
  const { currency, loading: locationLoading } = useUserLocation();
  const [rates, setRates] = useState({});

  useEffect(() => {
    if (!locationLoading && currency && currency !== "INR") {
      fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json")
        .then(res => res.json())
        .then(data => setRates(data.inr || {}))
        .catch(() => {});
    }
  }, [currency, locationLoading]);

  const convertINR = (inrAmount) => {
    if (locationLoading) return "Loading...";
    if (!currency || currency === "INR") return `₹${inrAmount}`;

    const rate = rates[currency.toLowerCase()];
    if (!rate) return `₹${inrAmount}`;

    const converted = (inrAmount * rate).toFixed(2);

    // Duniya ki 99% currencies ka symbol (sabse common + rare bhi)
    const symbols = {
      USD: "$",     EUR: "€",     GBP: "£",     AUD: "A$",    CAD: "C$",
      JPY: "¥",     CNY: "¥",     HKD: "HK$",   SGD: "S$",    NZD: "NZ$",
      CHF: "CHF",   SEK: "kr",    NOK: "kr",    DKK: "kr",    PLN: "zł",
      AED: "د.إ",   SAR: "ر.س",   QAR: "ر.ق",   KWD: "د.ك",   BHD: "ب.د",
      OMR: "ر.ع",   TRY: "₺",     ILS: "₪",     EGP: "E£",    ZAR: "R",
      BRL: "R$",    MXN: "$",     ARS: "$",     CLP: "$",     COP: "$",
      IDR: "Rp",    KRW: "₩",     THB: "฿",     MYR: "RM",    PHP: "₱",
      VND: "₫",     PKR: "₨",     BDT: "৳",     NPR: "₨",     LKR: "₨",
      NGN: "₦",     KES: "KSh",   GHS: "GH₵",   UAH: "₴",     RUB: "₽",
      INR: "₹",     // Just in case
    };

    const symbol = symbols[currency] || currency;
    return `${symbol}${converted}`;
  };

  const isLoading = locationLoading || (currency !== "INR" && Object.keys(rates).length === 0);

  return { convertINR, loading: isLoading, currency };
}