
import './components.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <button onClick={console.log("portfolio")} >Portfolio</button>
            <button>About</button>
            <button>Contact</button>
        </nav>
    )
}