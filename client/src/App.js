import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <header className="">
        {/* App-header */}
      </header>
      <main>
        <Projects />    {/* This was already here */}
        <Skills />      {/* <-- 2. ADD THIS COMPONENT */}
        <ContactForm /> {/* This was already here */}
      </main>
    </div>
  );
}

export default App;
