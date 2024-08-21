import React from "react";

function CurrencyInput({ label, value, onChange }) {
  return (
    <div className="CurrencyInput">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default CurrencyInput;
