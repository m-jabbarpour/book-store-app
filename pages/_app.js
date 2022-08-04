import { Provider } from "react-redux";

import "../styles/globals.css";
import "swiper/css/bundle";
import "../styles/swiper.css";
import "../styles/pagination.scss";
import { persistor, store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Head>
            <link rel="icon" href="/logos/logo.svg" />
          </Head>
          <Component {...pageProps} />
        </>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
