import { ToastContainer } from "react-toastify";
import Layout from "../components/Layout/Layout";
import { AppProvider } from "../contexts/AppContext";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    // <AppProvider>
    <>
      <Head>
        <title>Saksham Raheja</title>
        <link rel="shortcut icon" href="/main.jpg" type="image/x-icon"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
    // </AppProvider>
  );
}

export default MyApp;
