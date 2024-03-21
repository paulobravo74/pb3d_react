export default function Cards({image, arch, local}) {
    return (
        <div id="portfolio">
            
            <div className="cards">
                <div>
                    <img src={image} alt=""></img>
                </div>

                <div>
                    <p className="card-arch">{arch}</p>
                    <p className="card-local">{local}</p>
                </div>
           
            </div>
        </div>
    )
}