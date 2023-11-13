import { useCounterContext } from "../providers/CounterProvider";

const MyComponent3 = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <p>Count: {counter}</p>
    </div>
  );
};
export default MyComponent3;
