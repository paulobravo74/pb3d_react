import portfolio from "../service/portf"

export default function Banner() {

    const card = 1;

    return (
        <>
                <div className="text-banner">
                    <h2>{portfolio[card].architect}</h2>
                    <h3>{portfolio[card].local}</h3>
                    <h4>{portfolio[card].software}</h4>
                </div>
            <img className="banner" src={portfolio[card].images[0]} alt=''></img>
        </>
    )
}