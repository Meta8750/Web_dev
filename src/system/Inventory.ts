interface Item {
    name:string;
    quantity: number;
    exp: number;
    value: number;
    minLevel: number;
    additionalCD: number;
    job: string;
    mastery: number;
    masteryExp: number;
    masteryNextLevel: number;
    masteryValue: number;
    masteryBarWidth: string;
    img: string;
}

export default class Inventory {

    inventory: Item[];  
   

    constructor() {
        this.inventory = [];
    }

    // Methode zum Hinzufügen oder Aktualisieren eines Items im Inventar
    updateItem(item: Item): void {
        const existingItemIndex = this.inventory.findIndex(i => i.name === item.name);
        if (existingItemIndex >= 0) {
            // update excist item
            this.inventory[existingItemIndex] = {
                ...this.inventory[existingItemIndex],
                quantity: this.inventory[existingItemIndex].quantity + item.quantity
            };
        } else {
            // add new Item
            this.inventory.push(item);
        }
    }
     // Finde specific Items
     findItem(itemName: string) {
        return this.inventory.find(i => i.name === itemName);

    }

    removeItem(item: Item, ammount: number){
        // reduce the Item quantity based on the ammount
        const existingItemIndex = this.inventory.findIndex(i => i.name === item.name)
        this.inventory[existingItemIndex] = {
            ...this.inventory[existingItemIndex],
            quantity: this.inventory[existingItemIndex].quantity - ammount
        };
        // if quantity is 0 delet it from the Inventory
        if (this.inventory[existingItemIndex].quantity <= 0) {
            this.inventory = this.inventory.filter(i => i.name !== item.name)
            
        }   
    }

   
    getInventory(){
        return this.inventory;
    }
}