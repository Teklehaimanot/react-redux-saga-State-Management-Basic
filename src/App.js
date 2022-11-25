import { useSelector, useDispatch } from "react-redux";
import { deposit } from "./state/actions";
import { withdrow } from "./state/actions";

function App() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  console.log(account)
  return (
    <div className="App">
      <button onClick={() => dispatch(deposit(300))}>deposit</button>
      <button onClick={() => dispatch(withdrow(200))}>withdrow</button>
    </div>
  );
}

export default App;
