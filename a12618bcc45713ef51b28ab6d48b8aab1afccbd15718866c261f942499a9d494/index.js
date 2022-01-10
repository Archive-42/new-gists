import { h } from 'preact';
import { compose, withProps, withState } from 'proppy';
import { attach } from 'proppy-preact';

const P = compose(
  withProps({ foo: 'foo value' }),
  withState('counter', 'setCounter', 0)
);

function MyComponent({ foo, counter, setCounter }) {
  return (
    <div>
      <p>Foo: {foo}</p>

      <p>Counter: {counter}</p>

      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
}

export default attach(P)(MyComponent);