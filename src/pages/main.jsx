import portfolio from "../service/portf"
import { Link } from "react-router-dom"

export default function Main() {

    
    return (
    <div className="App">
      <h1>{portfolio[0].architect}</h1>
      <p>{portfolio[0].local}</p>
      <p>{portfolio[0].software}</p>
      <img src={portfolio[1].images[0]} alt=''></img>
      <Link to="/album">
        <button>Album</button>
      </Link>
    </div>
    )
}