import React, { useState } from "react";

function Player({name, symbol}) {

    const [ isEditing, setisEditing ] = useState(false);

    function handleEditClick() {
        setisEditing(true);
    }

    let playerName = <span className="player-name">{name}</span>;
    // let btnCaption = 'Edit';

    if(isEditing) {
        playerName = <input type="text" required value={name}/>
        // btnCaption = 'Save';
    }

  return (
    <li>
      <span id="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;