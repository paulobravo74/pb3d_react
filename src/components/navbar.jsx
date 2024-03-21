
import './components.css'

export default function Navbar() {

    const handleScrollToPortf = () => {
        const portfSection = document.getElementById('portf')
        portfSection.scrollIntoView({ behavior: "smooth", block: "start"});
    }

    const handleScrollToShowreel = () => {
        const shworeelSection = document.getElementById('showreel')
        shworeelSection.scrollIntoView({ behavior: "smooth", block: "start"})
    }


    return (
        <nav className="navbar">
            <button onClick={handleScrollToPortf}>Portfolio</button>
            <button onClick={handleScrollToShowreel}>Showreel</button>
            <button>About</button>
            <button>Contact</button>
        </nav>
    )
}