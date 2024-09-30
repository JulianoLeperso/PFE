// components/layout.js
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="content">
        {children}  {/* Render the page content here */}
      </main>
      <Footer />
    </div>
  );
}
