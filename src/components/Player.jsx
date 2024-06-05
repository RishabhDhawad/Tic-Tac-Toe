import React, { useState } from "react";

function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setisEditing] = useState(false);

  function handleEditClick() {
    setisEditing((editing) => !isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';
  if (isEditing) {
    editablePlayerName = <input type="text" required Value={playerName} onChange={handleChange}/>;
    // btnCaption = 'Save';
  }

  return (
    <li>
      <span id="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
