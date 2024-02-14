import React, { useRef } from 'react';

function InputNaoControlado() {
  const inputRef = useRef(null);

  const handleClick = () => {
    const value = inputRef.current.value;

    alert(`Valor inserido: ${value}`);
  };

  return (
    <div>
      <input type="number" ref={inputRef} placeholder="Insira um número" />

      <button onClick={handleClick}>Exibir Valor</button>
    </div>
  );
}

export default InputNaoControlado;
