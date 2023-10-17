import Navbar from './components/Navbar.js';
import Homepage from './components/HomePage.js';
import Footer from './components/Footer.js';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-indigo-800 via-40% to-indigo-900 min-h-screen flex flex-col justify-between">
        <nav className='w-full'>
          <Navbar />
        </nav>
      <div>
        <Outlet />
      </div>
      <footer className='w-full overflow-hidden'>
          <Footer />
      </footer>
    </div>
  );
}

export default App;
