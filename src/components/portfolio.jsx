import React from "react"
import portfolio from "../service/portf"
import Cards from "./cards"

export default function Portfolio() {

    const handleCardClick = (architect) => {
        console.log(`Hello ${architect}`)
    }

    return (
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
                                onClick={() => handleCardClick(item.architect)}
                            />
                        )

                    })}
            </div>
        </div>
    )
}