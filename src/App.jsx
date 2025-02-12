import Home from "./components/Home";
import About from "./components/About";
import Seo from "./components/Seo";
import Services from './components/Services'
import Projects from './components/Projects';
import Call from "./components/Call";



const App = () => {
    return (
      <div className="bg-[#000A1F] min-h-screen w-full overflow-hidden">
          <Home />
          <About />
          <Services />
          <Seo/>
          <Projects />
          <Call/>
        </div>
    );
  };
  

export default App;
