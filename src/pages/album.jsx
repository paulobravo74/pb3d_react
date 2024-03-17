import portfolio from "../service/portf"
import { Link } from "react-router-dom"

export default function Album() {
    return (
        <>
            <p>{portfolio[0].architect}</p>
            <img src={portfolio[0].images[0]} alt=''></img>
            <Link to="/">
                <button>Home</button>
            </Link>
        </>
    )
}