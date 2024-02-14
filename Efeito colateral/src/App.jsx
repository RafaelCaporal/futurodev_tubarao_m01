import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Componente montado');

    return () => {
      console.log('Componente desmontado');
    };
  }, []);

  return (
    <div>
      Abra o console para visualizar o <strong>componente.</strong>
    </div>
  );
}

export default MyComponent;
