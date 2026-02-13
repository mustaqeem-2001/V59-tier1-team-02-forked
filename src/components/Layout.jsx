
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen main-content">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
