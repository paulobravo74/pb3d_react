import portfolio from "../service/portf"
import { Link } from "react-router-dom"
import '../App.css'
import '../components/components.css'
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import Portfolio from "../components/portfolio"


export default function Main() {

    
    return (
    <div className="App">
        <Navbar />
        <Banner />
        
        <Portfolio />

        <div id="showreel">
            <h1>Showreel</h1>
        </div>

        <div id="about">
            <h1>About</h1>
        </div>

        <div id="contact">
            <h1>Contact</h1>
        </div>

        <Link to="/album">
            <button>Album</button>
        </Link>
        <h1>{portfolio[0].architect}</h1>
        <p>{portfolio[0].local}</p>
        <p>{portfolio[0].software}</p>
    </div>
    )
}