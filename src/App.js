import { Provider } from "react-redux";
import store from "./Redux/Store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Provider>
  );
}
