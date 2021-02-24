import Head from "next/head";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Head>
        <title>CAMERON AND NICOLE</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  width: 100%;
  margin-top: -16px;
`;

const Main = styled.main`
  width: 100%;
`;
