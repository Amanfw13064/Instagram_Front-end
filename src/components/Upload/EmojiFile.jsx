import React from 'react';
import { useState } from "react";
import Picker from 'emoji-picker-react';
import { FaGrinAlt } from 'react-icons/fa';

export const EmojisFn = () => {
    const [chosenEmoji, setChosenEmoji] = useState([]);
    const [showEmoji, setShowEmoji] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji([...chosenEmoji, emojiObject]);
    };
    const handleEmoji = () => {
        setShowEmoji(!showEmoji);
    }
    ///-------///////
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    //console.log(chosenEmoji)
    return <>

<div id="textContainer">
        <p> {text}{chosenEmoji ? chosenEmoji.map((e) => e.emoji) : null } </p>
    </div>
    <form onSubmit={handleSubmit}>
    <FaGrinAlt className='react-icons' onClick={handleEmoji} />
    <input type="text" id="caption" placeholder={"Write a Caption..."} onChange={handleChange}/>
    <div className='emojiDiv' style={(showEmoji ? {visibility : "visible"} : {visibility : "hidden"})}>
    <Picker onEmojiClick={onEmojiClick} />
    </div>
   
    </form> 
   
    </>
}