import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + state.step };
    }
    case 'setStep': {
      return { ...state, step: action.step };
    }
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  step: 1,
};

function Clicker() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: 'increment' });
  };

  const handleStepChange = (e) => {
    dispatch({ type: 'setStep', step: Number(e.target.value) });
  };

  return (
    <div>
      <p>Count is: {state.count}</p>
      <button onClick={handleClick}>Click me</button>
      <select onChange={handleStepChange} value={state.step} >
        <option value='1'>1</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
      </select>
    </div>
  );
}

export default Clicker;