import Home from "./components/Home";
import About from "./components/About";
import Feature from "./components/Feature";
import Who from "./components/Who"

const App=()=>{
    return(
        <div className="bg-[#000A1F]">
            <Home/>
            <About/>
            <Who/>
        </div>
    )
}

export default App;