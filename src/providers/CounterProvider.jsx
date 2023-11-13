import { createContext, useContext, useState } from "react";

// creamos un contexto
export const CounterContext = createContext();

// creamos un componente que permita proveer la información del contexto
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const aumentar = () => setCounter(counter + 1);
  const disminuir = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider
      value={{
        aumentar,
        disminuir,
        counter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// creamos un custom hook que nos ahorre importar el useContext y el Contexto en sí.
export const useCounterContext = () => useContext(CounterContext);
