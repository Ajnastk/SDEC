import Home from "./components/Home";
import About from "./components/About";
import Seo from "./components/Seo";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Fact from "./components/Fact";
import Says from "./components/Says";
import Call from "./components/Call"
import Footer from "./components/Footer";




const App = () => {
    return (

      <div className="bg-[#000A1F] min-h-screen w-full overflow-hidden">
          <Home />
          <About />
          <Services/>
          <Seo/>
          <Projects />
          <Fact/>
          <Says />
          <Call/>
          <Footer/>
        </div>
    );
  }

  export default App;
  


