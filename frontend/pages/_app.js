// pages/_app.js
import '../styles/global.css';  // Import global styles (create this file if it doesn't exist)
import Layout from '../components/layout';  // Import your layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />  {/* Render the current page's content */}
    </Layout>
  );
}

export default MyApp;  // Make sure you are exporting the component
