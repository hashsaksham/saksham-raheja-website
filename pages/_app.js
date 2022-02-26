import Layout from "../components/Layout/Layout";
import { AppProvider } from "../contexts/AppContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    // <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </AppProvider>
  );
}

export default MyApp;
