import Footer from './Footer';
import NavbarUnlogged from './Navbar(unlogged-in)';
import NavbarLogged from './Navbar(loggedin)';

const loggedIn = true; 

export default function Layout({ children }) {
  return (
    <div> 
      {loggedIn 
        ? (
          <NavbarLogged /> 
          )
        : (
          <NavbarUnlogged /> 
        )
      }
        {children}
      <Footer />
    </div>
  );
}