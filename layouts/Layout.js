import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
const Layout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '50px 0px'
      }}>
      <Header />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
