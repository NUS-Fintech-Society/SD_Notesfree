import Footer from './Footer';
import Navbar from './Navbar(unlogged-in)';
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
  // return (
  //   <div> 
  //     <Overlay /> 
  //   </div>
  // )
}