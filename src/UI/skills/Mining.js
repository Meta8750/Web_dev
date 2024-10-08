import React from 'react';
import styles from '../../UIcss/skills/Mining.module.css';
import { useState, useEffect } from 'react';
import Material from '../../system/Material.ts';
function Mining({time, player}) {
    const progressBarWidth = player.getCurrentSkill() ? ( time / (player.getCurrentSkill().CD + player.getActivity().additionalCD)) * 100 + '%' : '0%';
    const [ores, setOres] = useState({
      job: "mining",
      type: {
        stone :     new Material("stone",       1, 1, 1, 0, 0,10,"Mining"),
        copper:     new Material("copper",      1, 2, 3, 1, 0.5,10,"Mining"),
        tin:        new Material("tin",         1, 5, 1, 5, 0,10,"Mining"), 
        cole:       new Material("cole",        2, 10, 1, 10, 0,10,"Mining"),
  
        iron:       new Material("iron",        1, 20, 1, 15, 0,10,"Mining"),
        gold:       new Material("gold",        1, 44, 1, 20, 0,10,"Mining"),  
        emerald:    new Material("emerald",     1, 57, 1, 35, 0,10,"Mining"),
        crystal:    new Material("crystal",     1, 150, 1, 40, 0,10,"Mining"),
  
        beryll:     new Material("beryll",      1, 220, 1, 45, 0,10,"Mining"),
        azurit:     new Material("azurit",      1, 270, 1, 50, 0,10,"Mining"), 
        pyrit:      new Material("pyrit",       1, 350, 1, 55, 0,10,"Mining"),
        uranini:    new Material("uranini",     1, 410, 1, 60, 0,10,"Mining"),
        
        celestial:  new Material("celestial",   1, 1, 1, 65, 0,10,"Mining"),
        astral:     new Material("astral",      1, 1, 1, 70, 0,10,"Mining"),
        dragonite:  new Material("dragonite",   1, 1, 1, 80, 0,10,"Mining"),
        darkmatter: new Material("darkmatter",  1, 1, 1, 90, 0,10,"Mining"),
      
      }
    });

      
        const progressBarStyle = {
          width: progressBarWidth,
        };
        const notActive = {
          display: 'none',
        }

    const handleSelection = (selectedItem) => {
      
      if (player.getSkills('Mining').level >= selectedItem.minLevel) {
        player.setActivity(selectedItem);
      }
      
    }

  // <p>{ores.type[ore].minLevel}</p> <p>{ores.type[ore].nextLevel}</p>  <p>{ores.type[ore].exp}</p>

    return (
        <div className={styles.mainContainer}>
            {Object.keys(ores.type).map((ore, index) => (
              
                <div className={styles.underDiv}>
                  <div className={styles.upperDiv}  key={index}  onClick={() =>  handleSelection(ores.type[ore])}>
                      <p class="">{ore}</p>
                      <img className="w-14 m-auto" src={ores.type[ore].img}></img>
                      <div className={styles.timeBar}>
                      {player.getActivity() ? (<i style={player.getActivity().name === ores.type[ore].name ? progressBarStyle : notActive} className={styles.timeBarI}></i>) : (<i></i>)}</div>
                      
                      <p class="px-5">M: {ores.type[ore].mastery}</p>
                      <p>MExp: {ores.type[ore].masteryExp}</p>

                      <p>Min. level: {ores.type[ore].minLevel}</p>
                      <div className={styles.masteryBar}><i className={styles.masteryBarI} style={{ width: ores.type[ore].masteryBarWidth }}></i></div>
                      
                  </div>
                </div>
            ))}
            
        </div>
    )
   
}

export default Mining;