import React, { useState } from 'react';

function InputComEstado() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Digite algo..."
      />
      <p>Valor digitado: {inputValue}</p>
    </div>
  );
}

export default InputComEstado;
