import React from 'react';

export default function Editform(props){
    return (
        <>
            Top Text: <input name="topText" value={props.topText} onChange={props.onChange}/>
            Bottom Text: <input name="bottomText" value={props.bottomText} onChange={props.onChange}/>
        </>
    )

    
}