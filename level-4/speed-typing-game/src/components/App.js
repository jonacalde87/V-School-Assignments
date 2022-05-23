import React, { useState, useEffect, useRef } from "react"
import '../css/styles.css'

/**
 * Challenge: 
 * 1. Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change

 * 2. Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 * 
 * 3. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 * 
 * 4. Set up an effect that runs every time the `timeRemaining` changes
 *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
 * 
 *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
 *    a lot of extra work. * 
 *    Warning: there will be a bug in this, but we'll tackle that next
 * 
 * 5. Make it so the effect won't run if the time is already at 0
 * 
 * 6. Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 * 
 * 7. When the timer reaches 0, count the number of words the user typed in 
 * and display it in the "Word count" section
 * 
 * 8. After the game ends, make it so the user can click the Start button again
 * to play a second time
 * 
 * 9. Make the input box focus (DOM elements have a method called .focus()) 
 * immediately when the game starts
 */

export default function App() {
  const textBoxRef = useRef(null) // 9. 
  const STARTING_TIME = 20
  

  //set state
  const [text, setText] = useState("") // 1.
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME) // 3. 
  const [isTimeRunning, setIsTimeRunning] = useState(false) // 6. 
  const [wordCount, setWordCount] = useState(0) // 7. 
  
  //useEffect for time remaining
  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])


  //function to update state with every keystroke
  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }
    //to check if state is updating with every keystroke
    // console.log(text)

    //function to calculate the word count
    function calculateWordCount(text) {
      const wordsArr = text.trim().split(" ")// everytime it finds a space will add new item in array; trim will not count blank spaces
      return wordsArr.filter(word => word !== "").length // so it wont count empty spaces
    }

    //8. this function is the button to start the timer, re-start the timer, clear the textArea
    function startGame() {
      setIsTimeRunning(true)
      setTimeRemaining(STARTING_TIME)
      setText("")
      textBoxRef.current.disabled = false // you need to enable textArea to get focus
      textBoxRef.current.focus() // 9.
    }
    
    //to end the game
    function endGame() {
      setIsTimeRunning(false)
      setWordCount(calculateWordCount(text)) //7. 
    }
  
    //******************//
    return (
        <div>
            <h1>How fast do you type?</h1>

            <textarea 
              ref={textBoxRef} //9
              disabled={!isTimeRunning} //no cheating              
              onChange={handleChange}
              value={text}

            />

            <h4>Time remaining: {timeRemaining}</h4>

            <button 
              onClick={startGame}
              disabled={isTimeRunning} //so button will be disable while time is running
            >
              Start
            </button>

            <h1>Word count: {wordCount}</h1>
        </div>
    )
}


