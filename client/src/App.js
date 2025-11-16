import logo from "./logo.svg";
import "./App.css";
import ContactForm from "./ContactForm";
import Projects from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <AboutMe />
        <Projects /> {/* This was already here */}
        <Skills /> {/* <-- 2. ADD THIS COMPONENT */}
        <ContactForm /> {/* This was already here */}
      </main>
    </div>
  );
}

export default App;
