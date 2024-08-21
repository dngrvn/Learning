import React, { useState } from "react";
import axios from "axios";
import CurrencyInput from "./CurrencyInput";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/YOUR_KEY/latest/RUB`
      );
      const conversionRate = response.data.conversion_rates[targetCurrency];

      if (!conversionRate) {
        setError(`Conversion rate for ${targetCurrency} not available.`);
        setConvertedAmount("");
      } else {
        const result = (parseFloat(amount) * conversionRate).toFixed(2);
        setConvertedAmount(result);
      }
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      setConvertedAmount("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="CurrencyConverter">
      <CurrencyInput
        label="Amount in RUB: "
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <CurrencyInput
        label="Target Currency (e.g. USD, EUR): "
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value.toUpperCase())}
      />
      <button
        onClick={handleConvert}
        disabled={!amount || !targetCurrency || loading}
      >
        Convert
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {convertedAmount && (
        <p>
          {amount} RUB = {convertedAmount} {targetCurrency}
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
