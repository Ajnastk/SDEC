import Home from "./components/Home";
import About from "./components/About";
import Services from './components/Services'
import Projects from './components/Projects';



const App = () => {
    return (
      <div className="bg-[#000A1F] min-h-screen w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Home />
          <About />
          <Services />
          <Projects />

        </div>
      </div>
    );
  };
  

export default App;
