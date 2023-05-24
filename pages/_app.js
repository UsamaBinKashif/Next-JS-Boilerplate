import store from "@/src/store";
import { Provider } from "react-redux";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
