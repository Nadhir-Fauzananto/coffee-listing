import starIcon from "../assets/star.svg"

export function Card(props) {
    var popular = ""
    if (props.popular) {
        popular = "Popular"
    }

    return (
        <div className="card-container" id={props.available ? "coffee-available" : "coffee-soldout"}>
            <h2 className="coffee-name">{props.name}</h2>
            <p className={props.popular ? "coffee-popular" : ""} id="coffee-popular">{popular}</p>
            <img className="coffee-img" alt="coffee photo" src={props.image}></img>
            <div className="coffee-image-outside">
                <div className="row-one">
                    <p className="coffee-price">{props.price}</p>
                    <p  className={props.available ? "coffee-available" : "coffee-soldout"}>
                        {props.available ? "Available" : "Sold Out" }
                    </p>
                </div>
                <div className="row-two">
                    <div className="row-two-rating">
                        <img className="star-icon" alt="star-icon" src={starIcon}></img>
                        <p className="coffee-rating">{props.rating}</p>
                    </div>
                    <p className="coffee-votes">{props.votes} Votes</p>
                </div>
            </div>
        </div>
    )
}