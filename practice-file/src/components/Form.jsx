import React, { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    
    const h1Element = document.getElementById("output");
    if (h1Element) {
      h1Element.innerText = inputValue;
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Get Input Value</button>
      <h1 id="output"></h1>
    </div>
  );
}

export default Form;
