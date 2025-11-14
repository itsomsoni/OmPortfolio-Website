import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header className="">
        {/* App-header */}
      </header>
      <main>
        <Projects />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
