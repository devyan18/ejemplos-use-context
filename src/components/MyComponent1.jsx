import { useCounterContext } from "../providers/CounterProvider";

const MyComponent1 = () => {
  const { disminuir } = useCounterContext();

  return (
    <div>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};
export default MyComponent1;
