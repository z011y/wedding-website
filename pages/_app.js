import { useState } from "react";

import Layout from "../components/layout";
import { GlobalStyles } from "../styles/global";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
