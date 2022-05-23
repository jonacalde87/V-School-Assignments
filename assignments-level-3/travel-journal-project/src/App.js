import React from "react"
import Navbar from "./Navbar"

import Card from "./Card"
import data from "./data"

export default function App() {

    const cards = data.map(item => {
        return (
            <div>
                <Card
                    key={item.id}
                    item={item}
                    // img={item.coverImg}
                    // rating={item.stats.rating}
                    // reviewCount={item.stats.reviewCount}
                    // location={item.location}
                    // title={item.title}
                    // price={item.price}
                    // openSpots={item.openSpots}
                />
            </div>
        )
    })

    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}