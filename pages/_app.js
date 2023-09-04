// Import the Redux store that you've configured.
import store from "@/src/store";

// Import the Provider component from 'react-redux' to connect your React components to the Redux store.
import { Provider } from "react-redux";

// Import your global styles (e.g., SCSS).
import "@/styles/globals.scss";

// Define your main application component.
export default function App({ Component, pageProps }) {
  return (
    // Wrap your entire application with the Provider component to make the Redux store available to your components.
    <Provider store={store}>
      {/* Render the current page component (e.g., Home, About, etc.) with its props. */}
      <Component {...pageProps} />
    </Provider>
  );
}
