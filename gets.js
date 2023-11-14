function defence(pokemon){
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
     .then(response => response.json())
     .then(data => {
       const defence = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
       console.log(`Defence: ${defence}`);
     })
     .catch(error => console.error('Error:', error));
    }
    
    function attack(pokemon){
     fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)  
     .then(response => response.json())  
     .then(data => {      
       const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
       console.log(`Attack: ${attack}`);  
     })  
     .catch(error => console.error('Error:', error));
    }
    
    function getLifePoints(pokemon){
      fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)  
      .then(response => response.json())  
      .then(data => {      
        const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
        console.log(`HP: ${hp}`);  
      })  
      .catch(error => console.error('Error:', error));
    }
    
    
    defence("pikachu")
    attack("pikachu")
    getLifePoints("pikachu")