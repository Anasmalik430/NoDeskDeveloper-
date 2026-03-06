// utils/currencyConverter.js
import { useState, useEffect } from "react";
import useUserLocation from "../hooks/useUserLocation";

const SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  AUD: "A$",
  CAD: "C$",
  JPY: "¥",
  CNY: "¥",
  HKD: "HK$",
  SGD: "S$",
  NZD: "NZ$",
  CHF: "CHF",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  PLN: "zł",
  AED: "د.إ",
  SAR: "ر.س",
  QAR: "ر.ق",
  KWD: "د.ك",
  BHD: "ب.د",
  OMR: "ر.ع",
  TRY: "₺",
  ILS: "₪",
  EGP: "E£",
  ZAR: "R",
  BRL: "R$",
  MXN: "$",
  ARS: "$",
  CLP: "$",
  COP: "$",
  IDR: "Rp",
  KRW: "₩",
  THB: "฿",
  MYR: "RM",
  PHP: "₱",
  VND: "₫",
  PKR: "₨",
  BDT: "৳",
  NPR: "₨",
  LKR: "₨",
  NGN: "₦",
  KES: "KSh",
  GHS: "GH₵",
  UAH: "₴",
  RUB: "₽",
  INR: "₹",
};

export default function useINRConverter() {
  const { currency, loading: locationLoading } = useUserLocation();
  const [rates, setRates] = useState({});
  const [ratesLoading, setRatesLoading] = useState(false);

  useEffect(() => {
    if (!locationLoading && currency && currency !== "INR") {
      setRatesLoading(true);
      fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json",
      )
        .then((res) => res.json())
        .then((data) => {
          setRates(data.inr || {});
        })
        .catch((err) => {
          console.error("Currency rates fetch failed:", err);
        })
        .finally(() => {
          setRatesLoading(false);
        });
    }
  }, [currency, locationLoading]);

  const convertINR = (inrAmount) => {
    if (locationLoading || ratesLoading) return "Loading...";

    const numericAmount =
      typeof inrAmount === "string"
        ? parseFloat(inrAmount.replace(/[^0-9.]/g, ""))
        : inrAmount;

    if (!currency || currency === "INR")
      return `₹${numericAmount.toLocaleString()}`;

    const rate = rates[currency.toLowerCase()];
    if (!rate || isNaN(numericAmount))
      return `₹${numericAmount.toLocaleString()}`;

    const converted = (numericAmount * rate).toFixed(2);
    const symbol = SYMBOLS[currency] || currency;

    const formattedConverted = Number(converted).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    return `${symbol}${formattedConverted}`;
  };

  const loading =
    locationLoading ||
    (currency &&
      currency !== "INR" &&
      Object.keys(rates).length === 0 &&
      ratesLoading);

  return {
    convertINR,
    loading,
    symbol: SYMBOLS[currency] || SYMBOLS.INR,
    currency,
  };
}
