import React, { useState, useEffect} from 'react'

export default function Meme() {
    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const[allMemes, setAllMemes] = useState([])
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function newMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

  return (
    <div>
        <div className='form'>
            <input
                type='text'
                className='form--input--top'
                placeholder='Top text'
                name='topText'
                value={meme.topText}
                onChange={handleChange}
            />

            <input
                type='text'
                className='form--input--bottom'
                placeholder='Bottom text'
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}         
            />

            <button
                onClick={newMeme}
                className='form--button'
            >
                Get a new meme image
            </button>
        </div>

        <div className='meme'>
            <img 
                src={meme.randomImage}
                className='meme--img'
            />
            <h2 className='meme--text top'>{meme.topText}</h2>
            <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
    </div>
  )
}
