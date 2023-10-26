import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { Outlet } from "react-router-dom";
import UserProvider from "./context/UserContex.js";

function App() {
  return (
    <UserProvider>
      <div className="bg-gradient-to-r from-indigo-500 via-indigo-800 via-40% to-indigo-900 min-h-screen flex flex-col justify-between">
        <nav className="w-full">
          <Navbar />
        </nav>
        <div>
          <Outlet />
        </div>
        <footer className="w-full overflow-hidden">
          <Footer />
        </footer>
      </div>
    </UserProvider>
  );
}

export default App;
