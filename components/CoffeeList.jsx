import React from "react"
import {Card} from "./Card.jsx"

export function CoffeeList() {
    const [coffeeData, setCoffeeData] = React.useState([])

    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
        .then((response) => response.json())
        .then((data) => {
            setCoffeeData(...coffeeData, data)    
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <div className="coffee-data">
            {coffeeData.map((coffee) => (
                <Card 
                    key={coffee.id} 
                    popular={coffee.popular} 
                    image={coffee.image} 
                    name={coffee.name} 
                    price={coffee.price} 
                    rating={coffee.rating} 
                    votes={coffee.votes}
                    available={coffee.available} 
                />
                ))
            }
        </div>
    )
}

// [
//   {
//     "id": 1,
//     "name": "Cappuccino",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
//     "price": "$5.20",
//     "rating": 4.7,
//     "votes": 65,
//     "popular": true,
//     "available": true
//   },
//   {
//     "id": 2,
//     "name": "House Coffee",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg",
//     "price": "$3.50",
//     "rating": 4.85,
//     "votes": 15,
//     "popular": true,
//     "available": true
//   },
//   {
//     "id": 3,
//     "name": "Espresso",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg",
//     "price": "$2.50",
//     "rating": 4.9,
//     "votes": 55,
//     "popular": false,
//     "available": true
//   },
//   {
//     "id": 4,
//     "name": "Coffee Latte",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/coffee-latte.jpg",
//     "price": "$4.50",
//     "rating": 5.0,
//     "votes": 23,
//     "popular": false,
//     "available": true
//   },
//   {
//     "id": 5,
//     "name": "Chocolate Coffee",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg",
//     "price": "$4.00",
//     "rating": "4.65",
//     "votes": 122,
//     "popular": false,
//     "available": false
//   },
//   {
//     "id": 6,
//     "name": "Valentine Special",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg",
//     "price": "$5.50",
//     "rating": null,
//     "votes": 0,
//     "popular": false,
//     "available": true
//   }
// ]
