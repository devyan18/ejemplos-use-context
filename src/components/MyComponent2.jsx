import { useCounterContext } from "../providers/CounterProvider";

const MyComponent2 = () => {
  const { aumentar } = useCounterContext();

  return (
    <div>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
};
export default MyComponent2;
