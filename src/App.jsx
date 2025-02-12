import Home from "./components/Home";
import About from "./components/About";
import Services from './components/Services'
import Projects from './components/Projects';



const App = () => {
    return (
      <div className="bg-[#000A1F] min-h-screen w-full overflow-hidden">
          <Home />
          <About />
          <Services />
          <Projects />
      </div>
    );
  };
  

export default App;
