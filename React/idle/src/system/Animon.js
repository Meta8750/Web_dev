import { v4 as uuidv4 } from 'uuid';

export default class Animon {
    constructor(name, id, level, rarity, type, role, 
        attacks, maxhealth, healthGrowth, baseAD, ADGrowth, baseAP, 
        APGrowth, baseArmor, armorGrowth, baseMR,MRGrowth, baseMS, 
        MSGrowth, maxMana, manaGrowth,baseCritRate,baseCritDamage, armorPen, mrPen) {
            
        this.name = name;
        this.level = level
        this.maxLevel = 0
        this.rarity = rarity
        this.type = type
        this.role = role
        
        this.healthGrowth = healthGrowth
        this.ADGrowth = ADGrowth
        this.APGrowth = APGrowth
        this.armorGrowth = armorGrowth
        this.MRGrowth = MRGrowth
        this.MSGrowth = MSGrowth
        this.manaGrowth = manaGrowth
        
        this.armorPen = armorPen
        this.mrPen = mrPen
        this.baseCritDamage = baseCritDamage
        this.baseCritRate = baseCritRate

        this.maxMana = maxMana + (this.manaGrowth * this.level)
        this.maxhealth = maxhealth + (this.healthGrowth * this.level)
        this.baseAD = baseAD + (this.ADGrowth * this.level)
        this.baseAP = baseAP + (this.APGrowth * this.level)
        this.baseArmor = baseArmor + (this.armorGrowth * this.level)
        this.baseMR = baseMR + (this.MRGrowth * this.level)
        this.baseMS = baseMS + (this.MSGrowth * this.level)

        this.mana = this.maxMana
        this.health = this.maxhealth
        this.exp = 0
        this.nextLevel = this.calculateNextLevel()
        
        this.id = id
        this.attacks = attacks
        this.img = `/animon/${this.id}.gif`
        this.uid = uuidv4()
        this.dmgDealt = 0
        this.dmg = 0
        
        this.alive = true
        
        
    }
    getImageElement(x, y) {
        const style = {
            width: x || "100px",
            height: y || "100px",
            objectFit: "cover",
        };
    
        return <img src={this.img} alt={this.name} style={style} />;
    }
    

    levelProgess(){
        if (this.exp >= this.nextLevel){
            this.level++
            this.baseAD += this.ADGrowth
            this.baseAP += this.APGrowth
            this.baseArmor += this.armorGrowth
            this.baseMR += this.MRGrowth
            this.baseMS += this.MSGrowth
            this.maxhealth += this.healthGrowth
            this.health = this.maxhealth
            this.baseMana += this.manaGrowth
            this.nextLevel = this.calculateNextLevel()
            this.exp = 0
        }
    }
    calculateNextLevel(){
        return Math.pow(1.16, this.level) + 10 * this.level * (this.level / 2) + 4;
    }

    calculateDmg(attack, attacker){
        this.dmgDealt = this.health
        this.dmg = attack.baseDMG + (attacker.baseAD + attack.adScaling) + (attacker.baseAP + attack.apScaling) 
        if (Math.random() <= attacker.baseCritRate) {
            this.dmg *= attacker.baseCritDamage
        }

        this.health -= this.dmg
        if (this.health <= 0){
            this.alive = false
        }
        return this.dmgDealt -= this.health
    }
    
}
