import portfolio from "../service/portf"
import { Link } from "react-router-dom"
import '../App.css'
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import Cards from "../components/cards"

export default function Main() {

    
    return (
    <div className="App">
        <Navbar />
        <Banner />
        
        <div id="portf">
            <h1>Portfolio</h1>
            <div className='container_cards'>
                    {portfolio.map((item) => {

                        return (
                            <Cards
                                key={item.id}
                                image={item.images[1]}
                                arch={item.architect}
                                local={item.local}
                            />
                        )

                    })}
            </div>
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