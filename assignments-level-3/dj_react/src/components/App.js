import React, {useState} from 'react'
import '../css/app.css'

export default function App() {
    const [colors1, setColor1] = useState('white')
    const [colors2, setColor2] = useState('white')
    const [colors3, setColor3] = useState('white')
    const [colors4, setColor4] = useState('white')
    const pallette = ['blue', 'teal', 'orange', 'purple', 'black']
    const randomIndex =() => Math.floor(Math.random() * pallette.length)

    const smallTimeDj = () => {
        setColor1(prevColor => prevColor === 'black' ? 'white':'black')
        setColor2(prevColor => prevColor === 'black' ? 'white':'black')
        setColor3(prevColor => prevColor === 'black' ? 'white':'black')
        setColor4(prevColor => prevColor === 'black' ? 'white':'black')
    }

    const partyDj = () => {
        setColor1('purple')
        setColor2('purple')
    }
    return (
        <div>
            <div className="grid-container">
                <div className="container1" style={{backgroundColor: colors1}}>
                    <h3>Box1</h3>
                </div>
                <div className="container2" style={{backgroundColor: colors2}}>
                    <h3>Box2</h3>
                </div>
                <div className="container3" style={{backgroundColor: colors3}}>
                    <h3>Box3</h3>
                </div>
                <div className="container4" style={{backgroundColor: colors4}}>
                    <h3>Box4</h3>
                </div>
            </div>
            <button onClick={smallTimeDj}>Small time DJ</button>
            <button onClick={partyDj}>Party DJ</button>
            <button onClick={() => setColor3('blue')}>Left Blue</button>
            <button onClick={() => setColor4('blue')}>Right Blue</button>
            <button onClick={() => setColor1(pallette[randomIndex()])}>Big DJ 1</button>
            <button onClick={() => setColor2(pallette[randomIndex()])}>Big DJ 2</button>
            <button onClick={() => setColor3(pallette[randomIndex()])}>Big DJ 3</button>
            <button onClick={() => setColor4(pallette[randomIndex()])}>Big DJ 4</button>
        </div>
    )
}
