import React from "react"

export function Header() {
    const [activeButton, setActiveButton] = React.useState("all")

    const handleAllProducts = () => {
        setActiveButton("all")
        document.querySelectorAll("#coffee-soldout").forEach((el) => el.classList.remove("hide"))
    }

    const handleAvailableProducts = () => {
        setActiveButton("available")
        document.querySelectorAll("#coffee-soldout").forEach((el) => el.classList.add("hide"))
    }

    return(
        <header>
            <div className="header-text">
                <h1>Our Collection</h1>
                <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped weekly.</p>
            </div>
            <div className="button-container">
                <button 
                    className={activeButton === "all" ? "active" : ""}
                    onClick={handleAllProducts}>
                    All Products
                </button>
                <button 
                    className={activeButton === "available" ? "active" : ""}
                    onClick={handleAvailableProducts}>
                    Available Products
                </button>
            </div>
        </header>
    )
}