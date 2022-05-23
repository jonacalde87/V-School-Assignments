import React, { useState } from 'react'
import '../css/styles.css'

/**
 * 1. Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 * 
 *  2. Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 * 
 * 
 */

export default function () {
  const [text, setText] = useState("") //1. will start as an empty string

  //1. this function will take care of any changes in textArea
  function handleChange(e) {
    const {value} = e.target
    setText(value) // to update state
  }
  //1. console.log(text) // to check if state is working

  //2. function to calculate # of words in textArea state
  function calculateWordCount(text) { // this text is not the state!
    const wordsArr = text.split(" ")
    console.log(wordsArr.length)
    return wordsArr.length
  }

  

  return (
    <form>
        <h1>How fast do you type?</h1>
        <textarea 
          onChange={handleChange}
          value={text}
        />
        <h4>Time remaining: ???</h4>
        <button onClick={() => calculateWordCount(text)}>Start</button>
        <h1>Word count: ???</h1>
    </form>
  )
}



