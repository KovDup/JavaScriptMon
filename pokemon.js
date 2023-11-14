//! so: classes and methods in js are declared as private putting an # before the name
// TODO implement cure logic {
    // TODO define the battle logic {
        // TODO write a GUI with Next.js }}


class pokemon {
    name;
    #attack; // you set an attribute as private putting an # before the name
    #defence; // you set an attribute as private putting an # before the name
    #lp; // you set an attribute as private putting an # before the name
  
    constructor(name){
        this.#setData(name);
    }
  
    async #setData(name){ // you set a as private putting an # before the name
        try { // setting the data of the pokemon
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name); 
            const data = await response.json();
            const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
            const defence = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
            const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
            this.#attack = attack;
            this.#defence = defence;
            this.#lp = hp;
            this.name = name;
        } catch (error) {
            console.error('Error:', error);
        }
    }
  
    getAttack(){
        return this.#attack;
    }
  
    getDefence(){
        return this.#defence;
    }
  
    getLifePoints(){
        return this.#lp;
    }

    print() {
        setTimeout(() => {
            console.log(this.name + " attack is: " + this.getAttack()); // logs the attack stat of the pokemon
            console.log(this.name + " defence is: " + this.getDefence()); // logs the defence stat of the pokemon
            console.log(this.name + " life points are: "+ this.getLifePoints()); // logs the life points of the pokemon
        }, 2000);

    }
  }
  
  const poke1 = new pokemon("pikachu");
  poke1.print();
  
  

/*------------------------------------------------------------------------------------------------------------------*/



  const poke2 = new pokemon("mewtwo");
  poke2.print();