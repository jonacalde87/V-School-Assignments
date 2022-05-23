import React from "react"

function Home() {
    return (
        <>
            <h1 className='header--title'>
                Welcome to Jonacalde Carnivores
            </h1>

            <div className="pics--container">
                <h3>Venus Fly Traps</h3>
                <img src="https://cdn.shopify.com/s/files/1/1043/9998/products/image_9d987794-54df-4eb6-ae43-bb9e41d5215d.heic?v=1651372563" alt=""
                    className="pics"/>

                <h3>Pitcher Plants</h3>
                <img src="https://cdn.shopify.com/s/files/1/1043/9998/products/image_26072b87-ba7a-4338-b8ed-2762d7ea18e9_720x.jpg?v=1632524723" alt=""
                    className="pics"/>

                <h3>Sundews</h3>
                <img src="https://cdn.shopify.com/s/files/1/1043/9998/products/image_30c8db13-459a-487c-8e2c-64f90d6962ce_720x.jpg?v=1649059310" alt=""
                    className="pics"/>
            </div>
        </>





    )
}

export default Home