import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter basename="/app-todo/">
      <App />
    </BrowserRouter>
  </Provider>
);
