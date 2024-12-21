import { useReducer } from "react";
import styles from "./Clicker.module.css";

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + state.countStep };
    }
    case 'setStep': {
      return { ...state, countStep: action.countStep };
    }
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  countStep: 1,
};

function Clicker() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: 'increment' });
  };

  const handleStepChange = (e) => {
    dispatch({ type: 'setStep', countStep: Number(e.target.value) });
  };

  return (
    <div className={styles.clicker}>
      <p>Count is: {state.count}</p>
      <button onClick={handleClick}>Click me</button>
      <select onChange={handleStepChange} value={state.countStep} >
        <option value='1'>1</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
      </select>
    </div>
  );
}

export default Clicker;