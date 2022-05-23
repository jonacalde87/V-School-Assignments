import React from 'react';
import Editform from './EditForm';

export default function Memelist(props) {
    const {
        randomImage, 
        topText, 
        bottomText, 
        id, 
        handleDeleteFromList, 
        handleEditList, 
        toggleEdit, 
        handleEditChange
    } = props

    return (
            <form className="meme-list" id={id} >
                <img src={randomImage} className="meme-listImage" alt=""/>
                <h2 className="meme-listTextTop">{topText}</h2>
                <h2 className="meme-listTextBottom">{bottomText}</h2>
                <br />
                <button type="button" className="delete-list" onClick={() => handleDeleteFromList(id)}>Delete</button>
                <button type="button" className="edit-list" onClick={() => handleEditList(id)}>Edit</button>
                <br />
                {toggleEdit &&
                <Editform 
                    topText={topText}
                    bottomText={bottomText}
                    onChange={handleEditChange}
                />}
            </form>
    )
}