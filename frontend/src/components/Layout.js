import Footer from './Footer';
import Navbar from './navbar';
import { IsLoggedInContextProvider } from '../store/isloggedin';

export default function Layout({ children }) {
  return (
    <div>
      <IsLoggedInContextProvider>
      <Navbar />
      {children}
      <Footer />
      </IsLoggedInContextProvider>
    </div>
  );
}