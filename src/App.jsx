import Home from "./components/Home";
import About from "./components/About";
import Services from './components/Services'

const App=()=>{
    return(
        <div className="bg-[#000A1F]">
            <Home/>
            <About/>
            <Services/>
        </div>
    )
}

export default App;