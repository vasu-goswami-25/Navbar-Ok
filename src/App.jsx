import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Courses from "./components/Courses"
import { useState } from "react";
// import Contact from "./pages/Contact";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
    
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    
      {/* About section */}
      <About darkMode={darkMode} />

      {/* Courses section */}
      <Courses darkMode={darkMode} />

      {/* Contact Us section */}
      <ContactUs darkMode={darkMode} />
     
      {/* Footer Section */}
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
