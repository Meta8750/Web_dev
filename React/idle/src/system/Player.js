import React, { useState, useEffect } from 'react';

function Player({time, activity}) {
  // Initialisieren des Spielerzustands
  const [player, setPlayer] = useState({
    name: 'Player1',
    health: 100,
    level: 1,
    exp: 0,
    skills: {
      cutting: { level: 1, exp: 0 , CD: 3},
      mining: { level: 1, exp: 0, CD: 4 },
      
    }
  
  });


  
  useEffect(() => {
    if (activity){
      console.log(activity)
      
      if (time >= player.skills.job){
        console.log(activity);
    
      
    }
  }
  
}, [time, activity, player]);


      
 

  // Funktion zum Erhöhen der EXP und Level eines Skills
  const increaseSkillExp = (skill, exp) => {
    setPlayer((prevPlayer) => {
      const newExp = prevPlayer.skills[skill].exp + exp;
      const newLevel = newExp >= 100 ? prevPlayer.skills[skill].level + 1 : prevPlayer.skills[skill].level;

      return {
        ...prevPlayer,
        skills: {
          ...prevPlayer.skills,
          [skill]: {
            level: newLevel,
            exp: newExp % 100
          }
        }
      };
    });
  };

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Health: {player.health}</p>
      <p>Level: {player.level}</p>
      <p>EXP: {player.exp}</p>
      
      <h2>Skills</h2>
      {Object.keys(player.skills).map((skill) => (
        <div key={skill}>
          <h3>{skill}</h3>
          <p>Level: {player.skills[skill].level}</p>
          <p>EXP: {player.skills[skill].exp}</p>
          <button onClick={() => increaseSkillExp(skill)}>Increase {skill} EXP</button>
        </div>
      ))}
    </div>
  );
}

export default Player;