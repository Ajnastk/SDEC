import Home from "./components/Home";
import About from "./components/About";
import Seo from "./components/Seo";
import Services from './components/Services'
import Projects from './components/Projects';
import Call from "./components/Call";
import Footer from "./components/Footer";
import Fact from "./components/Fact";



const App = () => {
    return (

      <div className="bg-[#000A1F] min-h-screen w-full overflow-hidden">
          <Home />
          <About />
          <Services/>
          <Seo/>
          <Projects />
          <Fact/>
          <Call/>
          <Footer/>
        </div>
    );
  }
  

export default App;
