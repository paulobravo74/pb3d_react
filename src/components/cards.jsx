import React from "react"

export default function Cards({image, arch, local, onMouseEnter}) {
    
    
    
    return (
        <div id="portfolio" className="cardsContainer">
            
            <div className="card" onMouseEnter={onMouseEnter}>
                <div>
                    <img src={image} className="img" alt=""></img>
                </div>

                <div>
                    <h3 className="card-arch">{arch}</h3>
                    <p className="card-local">{local}</p>
                </div>
           
            </div>
        </div>
    )
}