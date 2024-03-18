import portfolio from "../service/portf"

export default function Banner() {
    return (
        <>
            <img className="banner" src={portfolio[1].images[0]} alt=''></img>
        </>
    )
}