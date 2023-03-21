import { Provider } from "react-redux";
import { store } from './store/store';
import RoutesConfig from "./config/RoutesConfig"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RoutesConfig />
      </Provider>
    </div>
  );
}

export default App;
