import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import "swiper/css/bundle";
import "../styles/swiper.css";
import "../styles/pagination.scss";
import { persistor, store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

export default MyApp;
