import Home1 from "./components/Home1";
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

      <div className="bg-[#000A1F]   ">
          <Home1 />
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
  


