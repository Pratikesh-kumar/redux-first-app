import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  const toggleCounterHandler = () => {};

  function incrementby5(){
    dispatch({type:"incrementby5"})
  }

  function decrementby5(){
    dispatch({type:"decrementby5"})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementby5}>incrementby5</button>
      <button onClick={decrementby5}>decrementby5</button>
    </main>
  );
};

export default Counter;
