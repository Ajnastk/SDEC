import Home from "./Home";
import About from "./About";
import Seo from "./Seo";
import Services from "./Services";
import Projects from "./Projects";
import Call from "./Call";

export default function Layout({ children }) {
  return (
    <div className="bg-[#000A1F] min-h-screen w-full overflow-hidden">
      {children}
      <Home />
      <About />
      <Services />
      <Seo />
      <Projects />
      <Call />
    </div>
  );
}
