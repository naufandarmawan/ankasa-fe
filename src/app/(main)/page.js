"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/features/counter/counterSlice";
import { Button } from "@mui/material";

const Home = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Button variant="contained" onClick={() => dispatch(increment())}>Increment</Button>
      <Button variant="outlined" onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
}


export default Home